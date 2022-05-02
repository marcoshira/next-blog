import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';
import mock from './mock';

const metadata = mock.posts.data[1];

const mock0 = {
  cover: {
    data: null,
  },
};

const props: PostCardProps = {
  slug: metadata.attributes.slug,
  cover: metadata.attributes.cover,
  title: metadata.attributes.title,
  excerpt: metadata.attributes.excerpt,
};

describe('<PostCard />', () => {
  it('should render', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', {
        name: metadata.attributes.title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: metadata.attributes.title,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(metadata.attributes.excerpt)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/post/${metadata.attributes.slug}`,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render without cover', () => {
    const { container } = renderTheme(
      <PostCard {...props} cover={mock0.cover} />,
    );
    expect(container).toMatchSnapshot();
  });
});
