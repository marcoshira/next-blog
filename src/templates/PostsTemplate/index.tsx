import * as Styled from './styles';
import { PostGrid } from '../../components/PostGrid';
import { PostsMetadata } from '../../shared-types/postAttributes';
import { Settings } from '../../shared-types/settings';
import { BaseTemplate } from '../Base';
import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';

export type PostsTemplateProps = {
  settings: Settings;
  posts: PostsMetadata;
  variables?: LoadPostsVariables;
  showSearch?: boolean;
};

export const PostsTemplate = ({
  settings,
  posts,
  variables,
  showSearch = true,
}: PostsTemplateProps) => {
  const [statePostsData, setStatePostsData] = useState(posts.data);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVariables);

    if (!morePosts || !morePosts.posts || !morePosts.posts.data.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVariables);
    setStatePostsData((d) => [...d, ...morePosts.posts.data]);
  };
  return (
    <BaseTemplate settings={settings} showSearch={showSearch}>
      <PostGrid data={statePostsData} />
      {statePostsData && statePostsData.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            onClick={handleLoadMorePosts}
            disabled={buttonDisabled}
          >
            {noMorePosts ? 'Não há mais posts' : 'Carregar Mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};
