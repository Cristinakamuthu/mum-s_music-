
import React, { useState } from 'react';
import './App.css';
import { songs } from './data';

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleBack = () => setSelectedSong(null);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Catholic Music Vibes 🎶</h1>
       
        <p className="subtitle">Let your soul be lifted through song</p>
      </header>

      {selectedSong ? (
        <div className="song-player">
          <h2>{selectedSong.title}</h2>
          <p className="hook">{selectedSong.hook}</p>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${selectedSong.youtubeId}`}
            title={selectedSong.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="description">{selectedSong.description}</p>
          <button onClick={handleBack} className="back-button">
            ⬅️ Back to Songs
          </button>
        </div>
      ) : (
        <div className="song-grid">
          {songs.map((song) => (
            <div
              key={song.id}
              className="song-preview-card"
              onClick={() => setSelectedSong(song)}
            >
              <img src={song.image} alt={song.title} className="thumbnail" />
              <h3>{song.title}</h3>
              <p className="hook">{song.hook}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
