import React from 'react';
import Expo from 'expo';
import { createDrawerNavigator } from 'react-navigation';
import Home from './Views/Home.js';
import DocView from './Views/DocView.js';

const RootStack = createDrawerNavigator(
  {
    Home: Home,
    Typescript: DocView
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <RootStack />;
  }
}