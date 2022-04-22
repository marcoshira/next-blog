import { screen } from '@testing-library/react';
import { HtmlContent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from '../ArticleHeader/mock';

const content = mock.attributes.content;

describe('<HtmlContent />', () => {
  it('should render with medium font', () => {
    renderTheme(<HtmlContent html="Children" />);
    expect(screen.getByText('Children')).toHaveStyle({
      'font-size': `calc(${theme.font.sizes.small} + 0.2rem)`,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html={content} />);
    expect(container).toMatchSnapshot();
  });
});
