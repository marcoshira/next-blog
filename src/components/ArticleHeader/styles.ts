import styled, { css } from 'styled-components';
import { Wrapper as ArticleMeta } from '../ArticleMeta/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1rem solid ${theme.colors.grey};
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    > h1 {
      margin-bottom: ${theme.spacings.medium};
      max-width: ${theme.spacings.maxWidth};
    }

    > p {
      margin-top: 0;
      max-width: ${theme.spacings.maxWidth};
      font-size: calc(${theme.font.sizes.small} + 0.4rem);
    }

    > img {
      width: 100%;
      max-width: ${theme.spacings.maxWidth};
    }

    & ${ArticleMeta} {
      max-width: ${theme.spacings.maxWidth};

      > p {
        margin-bottom: 0;
      }
    }
  `}
`;
