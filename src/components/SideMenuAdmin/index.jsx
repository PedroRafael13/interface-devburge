import { Container, ItemContainer, ListLink } from './styles';
import React from 'react'

import listLinks from './menu-list';

export const SideMenuAdmin = ({ pathname }) => {
  return (
    <Container>
      <ItemContainer>
        {listLinks.map((link) => (
          <ListLink
            key={link.id}
            to={link.link}
            $isActive={pathname === link.link}
          >
            <link.icon />
            {link.label}
          </ListLink>
        ))}
      </ItemContainer>
    </Container>
  );
};