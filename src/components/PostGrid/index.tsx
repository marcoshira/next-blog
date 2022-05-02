import * as Styled from './styles';
import { PostCard } from '../PostCard';
import { PostsMetadata } from '../../shared-types/postAttributes';

export type PostGridProps = PostsMetadata;

export const PostGrid = ({ data }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {data.length === 0 && (
        <Styled.NotFound>Nenhum post encontrado</Styled.NotFound>
      )}
      <Styled.Grid>
        {data.length > 0 &&
          data.map((post) => <PostCard key={post.id} {...post.attributes} />)}
      </Styled.Grid>
    </Styled.Wrapper>
  );
};
