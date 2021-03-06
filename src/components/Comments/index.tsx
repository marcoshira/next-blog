import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ title, id, slug, allowComments }: CommentsProps) => {
  if (!allowComments) return null;
  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="blog-mmh"
        config={{
          url: `https://blog-mmh.vercel.app/post/${slug}/`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
