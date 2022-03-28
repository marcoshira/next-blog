import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.black};
    transition: all 300ms ease-in-out;

    &:hover {
      border-right: 0.5rem solid ${theme.colors.crimson};
      color: ${theme.colors.crimson};
    }
  `}
`;
