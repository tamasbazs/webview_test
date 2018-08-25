import React from "react";
import { Container, Header, Body, Title, Content, Text, List, ListItem } from "native-base";

//I just want to "simulate" what I'd get from the local database
const docs = [
  {
    name: 'Home',
    isDoc: false,
    doc_data: null
  },
  {
    name: 'Typescript',
    isDoc: true,
    doc_data: require('../views/docs/typescript/db.json')
  }
];

export default class SideBar extends React.Component {
  renderList(docs, navigation) {
    let list = [];
    docs.forEach((doc) => {
      list.push(
        <ListItem itemHeader first
          button
          onPress={() => navigation.navigate((doc.isDoc)? 'DocView' : 'Home', {title: doc.name, subtitle: 'index', doc_html: (doc.doc_data)? doc.doc_data['index'] : null})}
        >
          <Text>{doc.name}</Text>
        </ListItem>
      );
      if(doc.doc_data){
        for (let key in doc.doc_data) {
          list.push(
            <ListItem 
              button
              onPress={() => navigation.navigate((doc.isDoc)? 'DocView' : 'Home', {title: doc.name, subtitle: key, doc_html: doc.doc_data[key]})}
            >
              <Text>{key}</Text>
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
            {
              this.renderList(docs, this.props.navigation)
            }
          </List>
        </Content>
      </Container>
    );
  }
}