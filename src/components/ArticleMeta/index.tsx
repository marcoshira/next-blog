import { Author } from '../../shared-types/author';
import { Category } from '../../shared-types/category';
import { Tag } from '../../shared-types/tag';
import { formatDate } from '../../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  updatedAt: string;
  author: Author;
  categories: Category;
  tags: Tag;
};

export const ArticleMeta = ({
  createdAt,
  updatedAt,
  author,
  categories,
  tags,
}: ArticleMetaProps) => {
  const comma = (array, obj) => {
    if (!(array.indexOf(obj) === array.length - 1)) {
      return <span>, </span>;
    }
  };

  const updateShow = (cre, upd) => {
    const creData = formatDate(cre).split(' ')[0];
    const updData = formatDate(upd).split(' ')[0];
    if (!(creData === updData)) {
      return (
        <>
          <span className="separator"> | </span>
          <span>
            Editado em:{' '}
            <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
          </span>
        </>
      );
    }
  };

  return (
    <Styled.Wrapper>
      <p>
        <span>Por </span>
        <a href={`/author/${author.data.attributes.slug}`}>
          {author.data.attributes.displayName}
        </a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {updateShow(createdAt, updatedAt)}
        <span className="separator"> | </span>
        <span className="categories">
          <span>Categorias: </span>
          {categories.data.map((category) => {
            return (
              <span key={`article-meta-cat-${category.id}`}>
                <a href={`/category/${category.attributes.slug}`}>
                  {category.attributes.displayName}
                </a>
                {comma(categories.data, category)}
              </span>
            );
          })}
        </span>
        <span className="separator"> | </span>
        <span className="tags">
          <span>Tags: </span>
          {tags.data.map((tag) => {
            return (
              <span key={`article-meta-cat-${tag.id}`}>
                <a href={`/tag/${tag.attributes.slug}`}>
                  {tag.attributes.displayName}
                </a>
                {comma(tags.data, tag)}
              </span>
            );
          })}
        </span>
      </p>
    </Styled.Wrapper>
  );
};
