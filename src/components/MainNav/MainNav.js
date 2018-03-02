import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Logo from '../Logo/Logo';
import './MainNav.scss';

const MainNav = () => {
  return (
    <div className="MainNav">
      <Logo />
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Personal</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Professional</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Companies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Playground</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Contact</NavLink>
        </NavItem>
      </Nav>
      <hr />
      <Nav vertical>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Another Link</NavLink>
        <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
  );
}

export default MainNav;
