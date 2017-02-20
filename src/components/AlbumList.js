import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
   state = { albums: [] };
   componentWillMount()
   {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums : response.data }));
   }

   renderAlbumList()
   {
     return this.state.albums.map(album =>
       <AlbumDetail key={album.title} eachAlbum={album} />
     );
   }

  render() {
    console.log(this.state);
  return (
  <ScrollView>
  {this.renderAlbumList()}
  </ScrollView> );
}
}

export default AlbumList;
