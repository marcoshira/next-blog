import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header, HeaderProps } from '.';
import mock from '../LogoLink/mock';

const blogName = 'blog';

const props: HeaderProps = {
  blogName: blogName,
  blogDescription: 'description',
  showText: true,
  srcImg: mock.srcImg,
  link: mock.link,
  newTab: mock.newTab,
};

describe('<Header />', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTheme(<Header {...props} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByAltText('blog')).toBeInTheDocument();
    expect(screen.getByText('description')).toHaveStyleRule('display', 'flex');
  });

  it('should render with default values and match snapshot', () => {
    const { container } = renderTheme(<Header srcImg={mock.srcImg} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(container).toMatchSnapshot();
  });

  it('should render without text match snapshot', () => {
    const { container } = renderTheme(
      <Header
        srcImg={mock.srcImg}
        showText={false}
        blogDescription="description"
      />,
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText('description')).toHaveStyleRule('display', 'none');
  });
});
