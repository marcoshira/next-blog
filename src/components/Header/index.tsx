import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  blogName?: string;
  blogDescription?: string;
  showText?: boolean;
  srcImg: string;
  link?: string;
  newTab?: boolean;
};

export const Header = ({
  blogName = '',
  blogDescription = '',
  showText = true,
  srcImg,
  link = '/',
  newTab = false,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink srcImg={srcImg} text={blogName} link={link} newTab={newTab} />
      <Styled.Container showText={showText}>
        <Heading size="small">{blogName}</Heading>
        {blogDescription}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
