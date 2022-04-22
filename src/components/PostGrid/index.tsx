import * as Styled from './styles';
import { PostCard } from '../PostCard';
import { PostsProps } from '../../shared-types/postAttributes';

export type PostGridProps = PostsProps;

export const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {posts.data.length === 0 && (
        <Styled.NotFound>Nenhum post encontrado</Styled.NotFound>
      )}
      <Styled.Post>
        {posts.data.length > 0 &&
          posts.data.map((post) => (
            <div key={post.id}>
              <PostCard {...post.attributes} />
            </div>
          ))}
      </Styled.Post>
    </Styled.Wrapper>
  );
};
