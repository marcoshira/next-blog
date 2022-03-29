import { PostMetadata } from '../../shared-types/postAttributes';
import { ArticleHeader } from '../ArticleHeader';
import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';

export type PostProps = PostMetadata;

export const Post = ({ attributes }: PostProps) => {
  return (
    <Styled.Wrapper>
      <ArticleHeader {...attributes} />
      <Styled.Content>
        <HtmlContent html={attributes.content} />
      </Styled.Content>
    </Styled.Wrapper>
  );
};
