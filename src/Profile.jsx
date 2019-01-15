import React, { Component } from 'react'
import './App.css'


class Profile extends Component{
  render(){
    console.log('this.props', this.props);
    let artist ={artistName:'', primaryGenreName:'', artworkUrl100:'' , collectionName:'',};
    artist = this.props.artist !== null ? this.props.artist: artist;


    return(
      <div className="profile">
        <img
          alt="Profile image"
          className="profile-img"
          src={artist.artworkUrl100}
        />
        <div>{artist.artistName}</div>
        <div>Most Recent Project  {artist.collectionName}</div>
        <div>{artist.primaryGenreName}</div>
      </div>
    )
  }
}

export default Profile
