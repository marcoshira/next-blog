import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { LogoLink } from '../LogoLink';
import { MetadataImage } from '../../shared-types/postAttributes';
import { MenuLink } from '../MenuLink';
import React, { useState } from 'react';

export type MenuPropsLinks = {
  id: string;
  link: string;
  text: string;
  newTab: boolean;
};

export type MenuProps = {
  menuLink: MenuPropsLinks[];
  blogName: string;
  logo: MetadataImage;
};

export const Menu = ({ menuLink, blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        onClick={handleOpenCloseMenu}
      >
        <MenuIcon aria-label="Open menu" />
      </Styled.OpenClose>
      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink
              link="/"
              text={blogName}
              srcImg={logo.data.attributes.url}
            />
          </Styled.Logo>
          {menuLink.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
