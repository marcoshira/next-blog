import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...props} menuLink={[]} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(buttonLink).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should open/close menu on click, and match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    fireEvent.click(buttonLink);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Blog Project' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Blog Project' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(mock.menuLink.length);

    fireEvent.click(buttonLink);

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
