import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import MainNav from '../MainNav/MainNav';
import MainContent from '../MainContent/MainContent';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col md="3">
            <MainNav />
          </Col>
          <Col md="9">
            <MainContent title="Bem vindo ao meu site!">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa, et ornare arcu. Donec facilisis ullamcorper felis, at ullamcorper dolor pellentesque eget. Etiam molestie viverra magna sit amet rhoncus. Sed ut libero tortor. Quisque nisi purus, euismod ac porttitor nec, tempor eget turpis. Sed nec est sapien. Duis consectetur augue eu nisl tristique scelerisque. Donec ut dui in urna tincidunt imperdiet eu id diam. Curabitur in nisl nisi. Nunc neque orci, ultricies a consequat id, ornare sit amet lorem. Duis bibendum libero vitae ipsum lacinia efficitur.
              </p>
              <p>
                Maecenas sit amet porttitor lectus. Cras id pulvinar urna. Aliquam tincidunt eros quam, ac venenatis sem mollis ut. Nulla vel justo sit amet turpis pretium scelerisque. Ut id ullamcorper leo. Cras laoreet magna sed dolor consequat vestibulum. Cras convallis arcu et ipsum dictum condimentum. Duis non ex interdum, ornare ex eu, rutrum justo. Nullam bibendum quam at sem interdum tincidunt sit amet in dui. Donec facilisis purus leo, eu dignissim libero vehicula non. Pellentesque ultrices, nunc in iaculis interdum, mauris eros pellentesque odio, et pretium nunc elit commodo tortor.
              </p>
              <p>
                Integer iaculis aliquam sem, non molestie tortor venenatis in. Vestibulum auctor quam et felis semper, ut volutpat tortor luctus. Mauris rhoncus hendrerit erat vel malesuada. Duis lorem enim, lacinia eget nunc in, ultrices posuere tortor. Sed eget turpis sed purus aliquam tempor dapibus quis lectus. Etiam eu purus sagittis, facilisis nisi id, iaculis enim. Cras et tincidunt diam.
              </p>
              <p>
                Nulla nisl tellus, tempus eu neque id, efficitur iaculis purus. Curabitur viverra consequat libero, non hendrerit nunc. Nullam bibendum pulvinar sapien, quis lacinia felis scelerisque ac. Curabitur condimentum cursus libero ut tincidunt. Quisque suscipit, mi id pulvinar congue, magna mauris faucibus justo, ut elementum magna odio eu augue. Ut quis dui nec neque pulvinar hendrerit. Duis a scelerisque quam. Sed feugiat iaculis massa, commodo pulvinar metus facilisis sit amet. Donec at nisi tempor leo molestie mattis sit amet eu leo. Integer sed sollicitudin neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              </p>
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sed ante et nisl mollis varius. Suspendisse pretium, nibh ut commodo egestas, turpis nulla fermentum elit, et lacinia est libero mattis arcu. Aliquam erat volutpat. Aliquam eu tellus cursus, tempor risus quis, iaculis purus. Donec ullamcorper, massa ut venenatis laoreet, eros risus posuere arcu, at luctus leo dui ac metus. Aliquam placerat, felis eu consectetur placerat, turpis eros sollicitudin lorem, sit amet volutpat nunc dolor consequat ex. Etiam maximus convallis tincidunt. Duis sit amet arcu sed dolor facilisis vulputate at eu purus. Fusce semper magna at justo tincidunt molestie. Sed fringilla, ante vel vulputate pulvinar, mauris velit placerat ligula, et ornare augue magna et odio. Nunc porttitor feugiat nisl sit amet congue. Morbi ultrices dictum enim, nec pulvinar lectus euismod vitae. Nullam sed facilisis magna, at tempor velit. Quisque ut dui pellentesque, consequat dolor non, rhoncus purus. Pellentesque at libero tortor.
              </p>
            </MainContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
