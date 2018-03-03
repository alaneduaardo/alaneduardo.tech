import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import MainNav from '../MainNav/MainNav';
import MainContent from '../MainContent/MainContent';
import Section from '../Section/Section';

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
            <MainContent title="Vamos conhecer um pouco sobre mim?">
              <Section title="Bio" img="http://noahsdad.com/wp-content/uploads/2011/05/down-syndrome-baby-boy-new-born-2.jpg" imgSide="right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa, et ornare arcu. Donec facilisis ullamcorper felis, at ullamcorper dolor pellentesque eget. Etiam molestie viverra magna sit amet rhoncus. Sed ut libero tortor. Quisque nisi purus, euismod ac porttitor nec, tempor eget turpis. Sed nec est sapien. Duis consectetur augue eu nisl tristique scelerisque. Donec ut dui in urna tincidunt imperdiet eu id diam. Curabitur in nisl nisi. Nunc neque orci, ultricies a consequat id, ornare sit amet lorem. Duis bibendum libero vitae ipsum lacinia efficitur.
                </p>
                <p>
                  Maecenas sit amet porttitor lectus. Cras id pulvinar urna. Aliquam tincidunt eros quam, ac venenatis sem mollis ut. Nulla vel justo sit amet turpis pretium scelerisque. Ut id ullamcorper leo. Cras laoreet magna sed dolor consequat vestibulum. Cras convallis arcu et ipsum dictum condimentum. Duis non ex interdum, ornare ex eu, rutrum justo. Nullam bibendum quam at sem interdum tincidunt sit amet in dui. Donec facilisis purus leo, eu dignissim libero vehicula non. Pellentesque ultrices, nunc in iaculis interdum, mauris eros pellentesque odio, et pretium nunc elit commodo tortor.
                </p>
                <p>
                  Integer iaculis aliquam sem, non molestie tortor venenatis in. Vestibulum auctor quam et felis semper, ut volutpat tortor luctus. Mauris rhoncus hendrerit erat vel malesuada. Duis lorem enim, lacinia eget nunc in, ultrices posuere tortor. Sed eget turpis sed purus aliquam tempor dapibus quis lectus. Etiam eu purus sagittis, facilisis nisi id, iaculis enim. Cras et tincidunt diam.
                </p>
              </Section>

              <Section title="Family" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TEGOlwAHKqE2G9wwajjY9XcB57IRiEi2XwPaajzXJJlqchca" imgSide="left">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa, et ornare arcu. Donec facilisis ullamcorper felis, at ullamcorper dolor pellentesque eget. Etiam molestie viverra magna sit amet rhoncus. Sed ut libero tortor. Quisque nisi purus, euismod ac porttitor nec, tempor eget turpis. Sed nec est sapien. Duis consectetur augue eu nisl tristique scelerisque. Donec ut dui in urna tincidunt imperdiet eu id diam. Curabitur in nisl nisi. Nunc neque orci, ultricies a consequat id, ornare sit amet lorem. Duis bibendum libero vitae ipsum lacinia efficitur.
                </p>
                <p>
                  Maecenas sit amet porttitor lectus. Cras id pulvinar urna. Aliquam tincidunt eros quam, ac venenatis sem mollis ut. Nulla vel justo sit amet turpis pretium scelerisque. Ut id ullamcorper leo. Cras laoreet magna sed dolor consequat vestibulum. Cras convallis arcu et ipsum dictum condimentum. Duis non ex interdum, ornare ex eu, rutrum justo. Nullam bibendum quam at sem interdum tincidunt sit amet in dui. Donec facilisis purus leo, eu dignissim libero vehicula non. Pellentesque ultrices, nunc in iaculis interdum, mauris eros pellentesque odio, et pretium nunc elit commodo tortor.
                </p>
                <p>
                  Integer iaculis aliquam sem, non molestie tortor venenatis in. Vestibulum auctor quam et felis semper, ut volutpat tortor luctus. Mauris rhoncus hendrerit erat vel malesuada. Duis lorem enim, lacinia eget nunc in, ultrices posuere tortor. Sed eget turpis sed purus aliquam tempor dapibus quis lectus. Etiam eu purus sagittis, facilisis nisi id, iaculis enim. Cras et tincidunt diam.
                </p>
              </Section>

              <Section title="Interests">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis efficitur massa, et ornare arcu. Donec facilisis ullamcorper felis, at ullamcorper dolor pellentesque eget. Etiam molestie viverra magna sit amet rhoncus. Sed ut libero tortor. Quisque nisi purus, euismod ac porttitor nec, tempor eget turpis. Sed nec est sapien. Duis consectetur augue eu nisl tristique scelerisque. Donec ut dui in urna tincidunt imperdiet eu id diam. Curabitur in nisl nisi. Nunc neque orci, ultricies a consequat id, ornare sit amet lorem. Duis bibendum libero vitae ipsum lacinia efficitur.
                </p>
                <p>
                  Maecenas sit amet porttitor lectus. Cras id pulvinar urna. Aliquam tincidunt eros quam, ac venenatis sem mollis ut. Nulla vel justo sit amet turpis pretium scelerisque. Ut id ullamcorper leo. Cras laoreet magna sed dolor consequat vestibulum. Cras convallis arcu et ipsum dictum condimentum. Duis non ex interdum, ornare ex eu, rutrum justo. Nullam bibendum quam at sem interdum tincidunt sit amet in dui. Donec facilisis purus leo, eu dignissim libero vehicula non. Pellentesque ultrices, nunc in iaculis interdum, mauris eros pellentesque odio, et pretium nunc elit commodo tortor.
                </p>
                <p>
                  Integer iaculis aliquam sem, non molestie tortor venenatis in. Vestibulum auctor quam et felis semper, ut volutpat tortor luctus. Mauris rhoncus hendrerit erat vel malesuada. Duis lorem enim, lacinia eget nunc in, ultrices posuere tortor. Sed eget turpis sed purus aliquam tempor dapibus quis lectus. Etiam eu purus sagittis, facilisis nisi id, iaculis enim. Cras et tincidunt diam.
                </p>
              </Section>
            </MainContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
