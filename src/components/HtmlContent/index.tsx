import * as Styled from './styles';
import { formatContent } from '../../utils/format-content';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  const fixedHtml = formatContent(html);
  return <Styled.Container dangerouslySetInnerHTML={{ __html: fixedHtml }} />;
};
