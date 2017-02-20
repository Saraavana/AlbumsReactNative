// index.ios.js - iOS Entry screen

//Importing Library which helps for component Creation
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Creation Of Component
const App = () => (
  <View style={{ flex: 1 }} >
  <Header headerTitleText = {'Albums'} />
  <AlbumList />
  </View>
);

//Rendering/Showing the component in iOS screen
AppRegistry.registerComponent('HelloWorld',() => App);
