import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';
import mock from './mock';

const mockPosts = {
  posts: {
    data: [],
  },
};

const props: PostGridProps = mock.posts;

describe('<PostGrid />', () => {
  it('should render', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(container).toMatchSnapshot();
  });
  it('should render without posts', () => {
    renderTheme(<PostGrid {...mockPosts.posts} />);

    expect(screen.getByText('Nenhum post encontrado')).toBeInTheDocument();
  });
});
