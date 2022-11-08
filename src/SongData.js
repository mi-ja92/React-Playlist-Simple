import React from "react";
import "./App.css";

function Song({ playlist, setPlaylist, text, artist, genre, rating, song }) {
  const deleteHandler = () => {
    setPlaylist(playlist.filter((element) => element.id !== song.id));
  };
  return (
    <li>
      <p>{text}</p>
      <p> {artist}</p>
      <p> {genre}</p>
      <p> {rating}</p>
      <button onClick={deleteHandler} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default Song;
