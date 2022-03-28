import styled, { css } from 'styled-components';
import { Container as HtmlContent } from '../HtmlContent/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.2rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${HtmlContent} {
      font-size: ${theme.font.sizes.small};

      > p > a {
        color: ${theme.colors.black};
      }
    }
  `}
`;
