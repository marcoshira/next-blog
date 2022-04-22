import { renderTheme } from '../../styles/render-theme';
import { Post, PostProps } from '.';
import mock from '../ArticleHeader/mock';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(container).toMatchSnapshot();
  });
});
