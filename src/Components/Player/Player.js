import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
import './Player.scss'

function Player({
    currentSong,
    isPlaying, 
    setPalying, 
    songInfo, 
    setSongInfo,
    audioRef,
    timeUpdateHandler,
}) {


   const getTime =(time)=> {
        if(time ) {
            return (
                Math.floor(time /60) + ':' + ('0' +Math.floor(time % 60)).slice(-2)
            )
        }
        else {
            return '0:00'
        }
   }



   const playSongHandler =()=> {
       if(isPlaying) {
        audioRef.current.pause()
       } else {
        audioRef.current.play()
       }
       setPalying(!isPlaying)
   }
   const dragHandler =(e)=> {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, current:e.target.value })
   }

  return (
    <div className='player'>
        <div className='time-control'>
            <p className='' >{getTime(songInfo.current)}</p>
            <input 
            max={songInfo.duration || 0} 
            value={songInfo.current}
            min={0} type="range"
            onChange={dragHandler}
            />
            <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className='play-control'>
            <FontAwesomeIcon className='skip-back'size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon className='play' onClick={playSongHandler} size='2x'  icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon className='skip-forward' size='2x'  icon={faAngleRight} />
        </div>

        <audio 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler} >
        </audio>
    </div>
  )
}

export default Player