import React from 'react';
import { Container, Header, Left, Right, Button, Body, Title, Content, Text, Icon } from 'native-base';

export default class Home extends React.Component {
  render() {
    return (
    	<Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{ this.props.navigation.state.routeName }</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Home
          </Text>
        </Content>
      </Container>
    );
  }
}