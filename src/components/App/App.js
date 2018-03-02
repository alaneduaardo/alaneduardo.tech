import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../../assets/images/logo-head.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col md="3" className="main-nav">
            <p className="title">
              <img src={logo} height="80" /><br />
              Alan Eduardo Software Artisan
            </p>
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
            <p>Link based</p>
            <Nav vertical>
              <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
            </Nav>
          </Col>
          <Col md="9"/>
        </Row>
      </Container>
    );
  }
}

export default App;
