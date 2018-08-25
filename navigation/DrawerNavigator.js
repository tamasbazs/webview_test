import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Home from '../views/Home.js';
import DocView from '../views/DocView.js';
import SideBar from '../components/SideBar.js';

export const RootStack = createDrawerNavigator(
  {
    Home: Home,
    DocView: DocView
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <SideBar {...props} />
  }
);