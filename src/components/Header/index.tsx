import { Heading } from '../Heading';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  blogName?: string;
  blogDescription?: string;
  showText?: boolean;
  logoData: LogoLinkProps;
};

export const Header = ({
  blogName = '',
  blogDescription = '',
  showText = true,
  logoData,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink {...logoData} />
      <Styled.Container showText={showText}>
        <Heading size="small">{blogName}</Heading>
        {blogDescription}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
