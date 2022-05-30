import React from 'react'

function LibrarySong({id, currentSong, setCurrentSong, songs, audioRef, isPlaying}) {

  const songSelectHndler = ()=> {
    const selectedSong = songs.filter((el)=> el.id ===id)
    setCurrentSong(selectedSong[0])
 
    if(isPlaying) {
      const playPromise =audioRef.current.play()
      if(playPromise !== undefined) {
        playPromise.then((_)=> {
          audioRef.current.play()
        })

      }
    }
  }
    return (
      <div className='library-song' onClick={songSelectHndler}>
          <img src={currentSong.cover} alt={currentSong.name} />
              <div className='library-desc'>
              <h3>{currentSong.name}</h3>
              <h4>{currentSong.artist}</h4>
          </div>
        
      </div>
    )
  }

export default LibrarySong