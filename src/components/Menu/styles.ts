import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (menuVisible: boolean) => css`
  left: ${menuVisible ? '0' : '-32rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.black};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${wrapperChanger(menuVisible)}
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xxlarge};
      img {
        border: 0.3rem solid ${theme.colors.crimson};
      }
    }
  `}
`;

const buttonChanger = (menuVisible: boolean, theme: DefaultTheme) => css`
  left: ${menuVisible ? '26rem' : '2rem'};
  color: ${menuVisible ? theme.colors.crimson : theme.colors.black};
  background: ${menuVisible ? theme.colors.black : 'inherit'};
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.black};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;
    ${buttonChanger(menuVisible, theme)}
  `}
`;
