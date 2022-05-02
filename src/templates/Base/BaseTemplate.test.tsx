import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate, BaseTemplateProps } from '.';
import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(screen.getByText('Descrição do blog.')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Open or close menu' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Feito com ❤ por Marcos Hirazawa' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<BaseTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
