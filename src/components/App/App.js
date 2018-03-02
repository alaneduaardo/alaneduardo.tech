import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import MainNav from '../MainNav/MainNav';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col md="3">
            <MainNav />
          </Col>
          <Col md="9"/>
        </Row>
      </Container>
    );
  }
}

export default App;
