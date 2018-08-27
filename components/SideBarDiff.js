import React from "react";
import { Container, Header, Body, Title, Content, Text, List, ListItem } from "native-base";
// import axios from 'react-native-axios';

//I'd be nice if I could say require('../views/docs/'+doc.name+'/index.json')... That way I could do what I have below in the comment block
/*
const docs = require('../views/docs/docs.json');
docs.forEach((doc) => { //docs follows the format in ../views/docs/docs.json
	let temp_db = require('../views/docs/'+doc.slug+'/db.json'); //again, I'd be nice if I could say require('../views/docs/'+doc.name+'/index.json')
	doc.index = require('../views/docs/'+doc.slug+'/index.json'); //index file contains "entries": [{"name": , "path": , "type": }], path and name are very important
	doc.index.entries.forEach((entry) => {
		if(temp_db[entry.path]){ //coincidentally, the path of the entry is the same key of the DB json item
			entry.html = temp_db[entry.path];
		}else{
			entry.html = '<h1>There is no html file with this path</h1>';
		}
	});
});
//Everything about this ^^^^ is going to turn out really slow if the number of docs increases, not sure how one would avoid that, yet.
//The biggest issue would be entry.html, the html strings are really long and there's a lot of them, instead of loading them all like I did above, I could fetch each one individually whenever a route is selected and pass them as a parameter like I'm doing below.
//This issue is worth investigating, which method of fetching and passing data would be best for performance and reponsitivity?
//Some logic I'm thinking about, on sidebar I just need list of docs and the entries, so on docview I could load the html string with a small param (which is entry.path), this is how I look at it: (sidebar=[list of docs, index.json of docs (contains paths)]) => param=entry.path => (docviewHTML=require(entry.path and some strings))
*/

const docs = [
  {
    name: 'Typescript',
    entries: require('../views/docs/typescript/index.json').entries
  }
];

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { docs };
	}

  renderList(docs) {
    let list = [];
    docs.forEach((doc) => {
      list.push(
        <ListItem itemHeader first
          button
          onPress={() => this.props.navigation.navigate('DocView', {title: doc.name, subtitle: 'index', doc_path: 'index'})}
        >
          <Text>{doc.name}</Text>
        </ListItem>
      );
      doc.entries.forEach((entry) => {
        list.push(
          <ListItem 
            button
            onPress={() => this.props.navigation.navigate('DocView', {title: doc.name, subtitle: entry.name, doc_path: entry.path})}
          >
            <Text>{entry.name}</Text>
          </ListItem>
        );
      });
    });
    return list;
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Docsets Menu</Title>
          </Body>
        </Header>
        <Content>
          <List>
          	<ListItem itemHeader first
		          button
		          onPress={() => this.props.navigation.navigate('Home')}
		        >
		          <Text>Home</Text>
		        </ListItem>
            {
              this.renderList(this.state.docs)
            }
          </List>
        </Content>
      </Container>
    );
  }
}