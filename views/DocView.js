import React from 'react';
import { WebView, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Left, Right, Button, Body, Title, Subtitle, Content, Text, Icon } from 'native-base';

export default class DocView extends React.Component {
	/*
		In the future the label could come from a prop, the list that contains the currently downloaded docsets.

		Also in the future I should find another way of adding the drawer labels, in accordance to the number of docsets that are currently downloaded
		See https://github.com/react-navigation/react-navigation/issues/1210#issuecomment-297450371 for using this DocView for any docset
	*/
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
            <Title>{ this.props.navigation.getParam('title', 'Undefined title') }</Title>
            <Subtitle>{ this.props.navigation.getParam('subtitle', 'Undefined subtitle') }</Subtitle>
          </Body>
          <Right />
        </Header>
				<WebView 
					source={{html: this.props.navigation.getParam('doc_html', '<h1>Undefined</h1>')}}
					originWhiteList={["*"]}
				/>
			</Container>
		);
	}
}