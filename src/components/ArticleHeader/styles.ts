import styled, { css } from 'styled-components';
import { Wrapper as ArticleMeta } from '../ArticleMeta/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      margin-bottom: ${theme.spacings.medium};
      max-width: 80rem;
    }

    > p {
      margin-top: 0;
      max-width: 80rem;
    }

    > img {
      width: 100%;
      max-width: 80rem;
    }

    & ${ArticleMeta} {
      max-width: 80rem;
    }
  `}
`;
