import React from 'react'
import LibrarySong from './LibrarySong'
import './Library.scss'

function Library({songs, setCurrentSong, audioRef, isPlaying}) {


  return (
    <div className='library'>
        <h2>
            Library
        </h2>
        <div className='library-songs'>
            {songs.map((song)=> {
                return  <LibrarySong 
                audioRef ={audioRef}
                key ={song.id}
                currentSong={song}
                setCurrentSong ={setCurrentSong}
                songs={songs}
                id={song.id}
                isPlaying ={isPlaying}
                 />
            })}
    
        </div>
    </div>
  )
}

export default Library