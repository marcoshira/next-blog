import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header, HeaderProps } from '.';
import mock from '../LogoLink/mock';

const blogName = 'blog';

const props: HeaderProps = {
  blogName: blogName,
  blogDescription: 'description',
  showText: true,
  logoData: {
    ...mock,
    text: blogName,
  },
};

describe('<Header />', () => {
  it('should render and match snapshot', () => {
    const { container } = renderTheme(<Header {...props} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByAltText('blog')).toBeInTheDocument();
    expect(screen.getByText('description')).toHaveStyleRule('display', 'flex');
  });

  it('should render with default values and match snapshot', () => {
    const { container } = renderTheme(<Header logoData={mock} />);
    expect(
      screen.getByRole('heading', { name: 'LogoLink' }),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render without text match snapshot', () => {
    const { container } = renderTheme(
      <Header logoData={mock} showText={false} blogDescription="description" />,
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText('description')).toHaveStyleRule('display', 'none');
  });
});
