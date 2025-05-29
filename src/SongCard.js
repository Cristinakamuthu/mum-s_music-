// src/SongCard.js
import React from 'react';

const SongCard = ({ song, onBack }) => {
  return (
    <div className="song-card">
      <h2>{song.title}</h2>
      <p>{song.description}</p>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${song.youtubeId}`}
          title={song.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <button className="back-button" onClick={onBack}>← Back</button>
    </div>
  );
};

export default SongCard;
