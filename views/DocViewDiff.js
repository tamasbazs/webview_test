import React from 'react';
import { WebView, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Left, Right, Button, Body, Title, Subtitle, Content, Text, Icon } from 'native-base';

// const db = require('./docs/typescript/db.json');

export default class DocView extends React.Component {

	render() {
		// let doc_html = db[this.props.navigation.getParam('doc_path', 'index')];
		return (
			<Container>
				<Header>
          <Left>
            <Button transparent onPress={()=> this.props.navigation.openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{ this.props.navigation.getParam('title', 'Undefined title') }</Title>
            <Subtitle>{ this.props.navigation.getParam('subtitle', 'Undefined subtitle') }</Subtitle>
          </Body>
          <Right/>
        </Header>
				<WebView 
					source={{html: require('./docs/typescript/db.json')[this.props.navigation.getParam('doc_path', 'index')]}}
					originWhiteList={["*"]}
				/>
			</Container>
		);
	}
}