import { PostAttributes } from '../../shared-types/postAttributes';
import { ArticleMeta } from '../ArticleMeta';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = PostAttributes;

export const ArticleHeader = ({
  title,
  excerpt,
  createdAt,
  updatedAt,
  author,
  tags,
  categories,
  cover,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="medium">{title}</Heading>
      <p>{excerpt}</p>
      <img
        src={cover.data.attributes.url}
        alt={cover.data.attributes.alternativeText}
      ></img>
      <ArticleMeta
        author={author}
        tags={tags}
        categories={categories}
        createdAt={createdAt}
        updatedAt={updatedAt}
      ></ArticleMeta>
    </Styled.Wrapper>
  );
};
