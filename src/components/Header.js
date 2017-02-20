// Import Libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) =>{
  const { textStyle, viewStyle } = styles;
  return (
    <View style = {viewStyle}>
    <Text style = {textStyle}>{props.headerTitleText}</Text>
    </View>
  );
};

//Styling components
const styles = {
  viewStyle: {
    backgroundColor : '#F0F0F0',
    justifyContent : 'center',
    alignItems : 'center',
    height : 60,
    paddingTop : 5,
    shadowColor : '#000000',
    shadowOffset : {width:0, height:2},
    shadowOpacity : 0.3,
    elevation : 2,
    position : 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Export Component to be available for other parts of App
export default Header;
