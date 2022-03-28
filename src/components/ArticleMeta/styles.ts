import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.mediumGray};
    font-style: italic;
    a {
      color: ${theme.colors.crimson};
      text-decoration: none;
      transition: all 300ms ease-in-out;
      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
