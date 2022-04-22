import { PostMetadata } from '../../shared-types/postAttributes';
import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import * as Styled from './styles';

export type PostProps = PostMetadata;

export const Post = ({ attributes }: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader {...attributes} />
      </PostContainer>
      <PostContainer size="content">
        <Styled.Content>
          <HtmlContent html={attributes.content} />
        </Styled.Content>
      </PostContainer>
    </Styled.Wrapper>
  );
};
