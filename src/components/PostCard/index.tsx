import * as Styled from './styles';
import { MetadataImage } from '../../shared-types/postAttributes';
import Link from 'next/link';
import { Heading } from '../Heading';

export type PostCardProps = {
  slug: string;
  cover: MetadataImage;
  title: string;
  excerpt: string;
};

export const PostCard = ({ slug, cover, title, excerpt }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          {cover.data === null ? (
            <span></span>
          ) : (
            <Styled.Cover src={cover.data.attributes.url} alt={title} />
          )}
          <Heading as="h3" size="small">
            {title}
          </Heading>
          <Styled.Excerpt>{excerpt}</Styled.Excerpt>
        </a>
      </Link>
    </Styled.Wrapper>
  );
};
