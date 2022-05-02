import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from '.';

import mock from './mock';

const mock0 = {
  author: {
    data: null,
  },
};

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author, tag and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(
      screen.getByRole('link', { name: 'Luísa Santiago' }),
    ).toHaveAttribute('href', '/author/luisa-santiago');
    expect(screen.getByRole('link', { name: 'Django' })).toHaveAttribute(
      'href',
      '/category/django',
    );
    expect(screen.getByRole('link', { name: 'UseRef' })).toHaveAttribute(
      'href',
      '/tag/use-ref',
    );
    expect(screen.getByRole('link', { name: 'Postgres' })).toHaveAttribute(
      'href',
      '/tag/postgres',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByText('25/03/2022 15:28')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
    expect(screen.getByText('28/03/2022 15:29')).toHaveAttribute(
      'datetime',
      props.updatedAt,
    );
  });

  it('should format date without updatedAt', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} updatedAt="2022-03-25T18:28:16.052Z" />,
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText('25/03/2022 15:28')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should render without data and match snapshot', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} author={mock0.author} />,
    );
    expect(container).toMatchSnapshot();
  });
});
