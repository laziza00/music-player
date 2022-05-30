import './App.css';
import Song from './Components/Song/Song';
import Player from './Components/Player/Player';
import data from './data'
import { useRef, useState } from 'react';
import Library from './Components/Library/Library';

function App() {

  const audioRef =useRef(null)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[2])
  const [isPlaying, setPalying] =useState(false)
  const [songInfo, setSongInfo] = useState({
    current : 0,
    duration: 0,
   })

   const timeUpdateHandler =(e)=> {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo, current, duration })

}

  return (
    <div className="App">
      <div className='container'>
       <Song
        currentSong={currentSong}
        />
        <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying ={isPlaying}
        setPalying ={setPalying}
        setSongInfo={setSongInfo}
        songInfo= {songInfo}
        timeUpdateHandler ={timeUpdateHandler}
        />
      </div>

        <Library
         isPlaying={isPlaying}
         audioRef={audioRef}
         songs={songs}
         setCurrentSong ={setCurrentSong}
      />
    </div>
  );
}

export default App;
