import Link from 'next/link';
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
        {author.data === null ? <span></span> : <span>Por </span>}
        {author.data === null ? (
          <span></span>
        ) : (
          <Link href={`/author/${author.data.attributes.slug}`}>
            <a>{author.data.attributes.displayName}</a>
          </Link>
        )}
        {author.data === null ? (
          <span></span>
        ) : (
          <span className="separator"> | </span>
        )}
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {updateShow(createdAt, updatedAt)}
        {categories.data.length > 0 && <span className="separator"> | </span>}
        <span className="categories">
          {categories.data.length > 0 && <span>Categorias: </span>}
          {categories.data.map((category) => {
            return (
              <span key={`article-meta-cat-${category.id}`}>
                <Link href={`/category/${category.attributes.slug}`}>
                  <a>{category.attributes.displayName}</a>
                </Link>
                {comma(categories.data, category)}
              </span>
            );
          })}
        </span>
        {tags.data.length > 0 && <span className="separator"> | </span>}

        <span className="tags">
          {tags.data.length > 0 && <span>Tags: </span>}

          {tags.data.map((tag) => {
            return (
              <span key={`article-meta-cat-${tag.id}`}>
                <Link href={`/tag/${tag.attributes.slug}`}>
                  <a>{tag.attributes.displayName}</a>
                </Link>
                {comma(tags.data, tag)}
              </span>
            );
          })}
        </span>
      </p>
    </Styled.Wrapper>
  );
};
