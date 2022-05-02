import { useRouter } from 'next/router';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Settings } from '../../shared-types/settings';
import * as Styled from './styles';

export type BaseTemplateProps = {
  settings: Settings;
  children: React.ReactNode;
  showSearch?: boolean;
};

export const BaseTemplate = ({
  settings,
  children,
  showSearch = true,
}: BaseTemplateProps) => {
  const attributes = settings.data.attributes;
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <Menu
        menuLink={attributes.menuLink}
        blogName={attributes.blogName}
        logo={attributes.logo}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={attributes.blogName}
          blogDescription={attributes.blogDescription}
          srcImg={attributes.logo.data.attributes.url}
        />
      </Styled.HeaderContainer>

      {showSearch ? (
        <Styled.SearchContainer>
          <form action="/search/" method="GET">
            <Styled.SearchInput
              type="search"
              placeholder="Procurar"
              name="q"
              defaultValue={router.query.q}
            />
          </form>
        </Styled.SearchContainer>
      ) : null}

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={attributes.html} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
