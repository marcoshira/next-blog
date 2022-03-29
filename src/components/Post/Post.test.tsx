import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';
import mock from '../ArticleHeader/mock';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render', () => {
    renderTheme(<Post {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
