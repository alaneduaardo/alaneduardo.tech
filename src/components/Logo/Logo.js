import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './Logo.scss';

const Logo = () => {
  return (
    <div className="Logo">
      <div className="logo-img"></div>
      <div className="first-line">Alan Eduardo</div>
      <div className="second-line">Software Artisan</div>
    </div>
  );
}

export default Logo;
