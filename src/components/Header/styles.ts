import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

type DisplayText = {
  showText?: boolean;
};

const displayText = () => css`
  display: flex;
`;

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;

    div {
      margin: ${theme.spacings.xlarge} ${theme.spacings.medium};
    }
  `}
`;

export const Container = styled.div<DisplayText>`
  ${({ theme, showText }) => css`
    display: none;
    ${showText && displayText()}
    flex-direction: column;
    max-width: 70rem;

    & ${Heading} {
      margin-top: 0;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;
