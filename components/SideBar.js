import React from "react";
import { Container, Header, Body, Title, Content, Text, List, ListItem } from "native-base";

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
*/

const docs = [
  {
    name: 'Typescript',
    doc_data: require('../views/docs/typescript/db.json') //I know that I can dynamically create an array that contains objects that contain certain json data, but how do I deal with require?
  }
];

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { docs };
	}

  cleanString(path) {
    let path_array = path.split('');
    let i = 0;
    while(path_array[i]) {
      if(path_array[i] == '/'){
        path_array.splice(0, i+1); //remove the '/' and everything before it
        i = 0; // start from the new beginning
      }else{
        i++;
      }
    }
    return path_array.join('');

  }

  renderList(docs) {
    let list = [];
    docs.forEach((doc) => {
      list.push(
        <ListItem itemHeader first
          button
          onPress={() => this.props.navigation.navigate('DocView', {title: doc.name, subtitle: 'index', doc_html: (doc.doc_data)? doc.doc_data['index'] : null})}
        >
          <Text>{doc.name}</Text>
        </ListItem>
      );
      if(doc.doc_data){
        for (let key in doc.doc_data) {
          let clean_key = this.cleanString(key);
          list.push(
            <ListItem 
              button
              onPress={() => this.props.navigation.navigate('DocView', {title: doc.name, subtitle: clean_key, doc_html: doc.doc_data[key]})}
            >
              <Text>{clean_key}</Text>
            </ListItem>
          );
        }
      }
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