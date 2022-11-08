import React from "react";
import Song from "./SongData";
import "./App.css";

function MyPlaylist({ playlist, setPlaylist }) {
  console.log(playlist);
  return (
    <div className="myplaylist">
      <ul className="list">
        <li className="tabel">
          <p>Title</p>
          <p>Artist</p>
          <p>Genre</p>
          <p>Rating</p>
        </li>

        {playlist.map((song) => (
          <Song
            key={song.id}
            text={song.text}
            artist={song.artist}
            genre={song.genre}
            rating={song.rating}
            id={song.id}
            setPlaylist={setPlaylist}
            song={song}
          />
        ))}
      </ul>
    </div>
  );
}

export default MyPlaylist;
