import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import './MainContent.scss';

const MainContent = ( props ) => {
  return (
    <section className="MainContent">
      <header>
        { props.title !== '' && props.title !== null ? ( <h1>{ props.title }</h1> ) : ''}
      </header>
      <article>
        { props.children }
      </article>
    </section>
  );
}

export default MainContent;
