import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostsTemplate, PostsTemplateProps } from '.';
import mock from './mock';

const props: PostsTemplateProps = mock;

describe('<PostsTemplate />', () => {
  it('should render', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
