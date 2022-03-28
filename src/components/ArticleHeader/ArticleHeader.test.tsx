import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

const props: ArticleHeaderProps = mock.attributes;

describe('<ArticleHeader />', () => {
  it('should render', () => {
    renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', {
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }),
    ).toHaveStyle({
      'max-width': '80rem',
    });

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor fermentum nisl, ut pharetra leo lacinia et. Etiam nec urna sed orci bibendum sodales.',
      ),
    ).toHaveStyle({
      'max-width': '80rem',
    });

    expect(screen.getByAltText('1920x1080 1')).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dr5ot2zqr/image/upload/v1648156169/1920x1080_6aaecb929e.jpg',
    );
  });
});
