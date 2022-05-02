import styled, { css } from 'styled-components';
import { Container as Html } from '../HtmlContent/styles';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    & ${Html} {
      max-width: ${theme.spacings.maxWidth};
      font-size: ${theme.font.sizes.small};
      /* display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center; */
    }
  `}
`;
