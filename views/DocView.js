import React from 'react';
import { WebView, ScrollView, Dimensions } from 'react-native';
import HtmlView from 'react-native-render-html';
import { Container, Header, Left, Right, Button, Body, Title, Subtitle, Icon } from 'native-base';

export default class DocView extends React.Component {
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
          <Right/>
        </Header>
        <ScrollView style={{ flex: 1}}>
        	<HtmlView
        		html={this.props.navigation.getParam('doc_html', '<h1>Undefined</h1>')}
        		imagesMaxWidth={Dimensions.get('window').width}
        	/>
        </ScrollView>
				{/*<WebView
					style={styles.WebViewStyle}
					source={{html: this.props.navigation.getParam('doc_html', '<h1>Undefined</h1>')}}
					originWhiteList={["*"]}
				/>*/}
			</Container>
		);
	}
}