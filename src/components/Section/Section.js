import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './Section.scss';

const Section = (props) => {
  return (
    <section className="Section">
      { props.children }
    </section>
  );
}

export default Section;
