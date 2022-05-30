import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Song.scss'

function Song({currentSong}) {
  return (
    <div className='song-container'>
        <img src={currentSong.cover} alt={currentSong.name} />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
    </div>
  )
}

export default Song