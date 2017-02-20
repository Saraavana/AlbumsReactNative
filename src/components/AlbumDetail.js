import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({eachAlbum}) => {
  const {title, artist, thumbnail_image,image,url} = eachAlbum;
  const {thumbnailStyle,headerTextStyle, thumbnailContainerStyle,headerTitleTextStyle,imageStyle} = styles;
  return (
   <Card>

   <CardSection>
     <View style={thumbnailContainerStyle}>
      <Image
       style={thumbnailStyle}
       source={{ 'uri': thumbnail_image}} />
     </View>
     <View style={headerTextStyle}>
     <Text style={headerTitleTextStyle}>{title}</Text>
     <Text>{artist}</Text>
     </View>
   </CardSection>

   <CardSection>
    <Image
    style={imageStyle}
    source={{uri : image}}
    />
   </CardSection>

   <CardSection>
    <Button onTapped={() => Linking.openURL(url)}>
    Buy Now
    </Button>
   </CardSection>

   </Card>
  );
};

const styles = {
  headerTextStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  headerTitleTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:
  {
    height: 325,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
