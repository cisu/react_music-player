import React, {useState} from 'react';
// Import Styles
import './styles/app.scss';
// Adding Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
//Import data
import chillhop from './data';
//Util
import {playAudio} from './util';

function App() {
  // State
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className=''>
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
