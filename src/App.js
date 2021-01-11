import React, {useState} from 'react';
// Import Styles
import './styles/app.scss';
// Adding Components
import Player from './components/Player';
import Song from './components/Song';
//Import data
import chillhop from './data';
//Util
import {playAudio} from './util';

function App() {
  // State
  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className=''>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
