import React from 'react';
import {View} from 'react-native';


const CardSection = (props) => {
  return (
  <View style={styles.cardSectionStyle}>
  {props.children}
  </View>
);
};

const styles = {
  cardSectionStyle : {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default CardSection;
