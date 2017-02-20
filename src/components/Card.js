import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  cardStyle: {
    borderWidth :  1,
    borderRadius : 2,
    borderColor : '#ddd',
    borderBottomWidth : 0,
    shadowOffset : {width:0,height:2},
    shadowColor : '#000',
    shadowOpacity : 0.1,
    shadowRadius : 2,
    elevation : 1,
    marginLeft : 5,
    marginRight : 5,
    marginTop : 10
  }
};

export default Card;
