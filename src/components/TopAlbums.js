import '../styles/TopAlbums.css'
import React, { Component } from 'react'
import artistImage from '../img/artistl.jpg';

export class TopAlbums extends Component {
  static propTypes = {}

  render() {
    return (
    <div className='container'>
      <div className='top'>
        <div className='title'>
            <h4>Top Albums</h4>
            <p>See all</p>
        </div>
        <div className='albums'>
            <div className='album'>
            <img alt="album cover" src={artistImage} />
                <p>Artist 1</p>
                <p>Album 1</p>
            </div>

            <div className='album'>
            <img alt="album cover" src={artistImage} />
                <p>Artist 1</p>
                <p>Album 1</p>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default TopAlbums
