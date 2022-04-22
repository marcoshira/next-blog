import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: 0;
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xsmall};
      transition: all 300ms ease-in-out;
    }
    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }
    &:hover ${HeadingStyles} {
      color: ${theme.colors.crimson};
    }
    img {
      transition: all 300ms ease-in-out;
    }

    &:hover img {
      opacity: 0.6;
    }

    &:hover p {
      color: ${theme.colors.mediumGray};
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
`;

export const Excerpt = styled.p`
  transition: all 300ms ease-in-out;
`;
