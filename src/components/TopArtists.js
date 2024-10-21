import '../styles/TopArtists.css'
import React, { Component } from 'react'
import artistImage from '../img/artistl.jpg';
import { IoPlayCircle } from 'react-icons/io5';


export class TopArtists extends Component {
  static propTypes = {}

  render() {
    return (
        <div className='container' >
      <div className='topArtists' >
        <div className='title'>
            <h4>Top Artists</h4>
            <p>See all</p>
        </div>
        <div className='albums' >
            <div className='album' >
            <img alt="album cover" src={artistImage} />
            <div className='overlay'>
                <IoPlayCircle className='play-icon' />
              </div>
                <p>Artist 1</p>
               
            </div>

            <div className='album'>
            <img alt="album cover" src={artistImage} />
            <div className='overlay'>
                <IoPlayCircle className='play-icon' />
              </div>
                <p>Artist 1</p>
             
              
            </div>
            <div className='album'>
            <img alt="album cover" src={artistImage} />
            <div className='overlay'>
                <IoPlayCircle className='play-icon' />
              </div>
                <p>Artist 1</p>
               
              
            </div>

            <div className='album'>
            <img alt="album cover" src={artistImage} />
            <div className='overlay'>
                <IoPlayCircle className='play-icon' />
              </div>
                <p>Artist 1</p>
              
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default TopArtists
