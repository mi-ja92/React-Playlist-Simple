import React from "react";
import Song from "../song/SongData";
import "./playlist.css";

function MyPlaylist({ playlist, setPlaylist }) {
  console.log(playlist);
  return (
    <div className="myplaylist">
      <h1>My Playlist</h1>
      <ul className="list">
        <li className="overview">
          <p className="songtitle">Title</p>
          <p className="songtitle">Artist</p>
          <p className="tabel">Genre</p>
          <p className="tabel">Rating</p>
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
            playlist={playlist}
          />
        ))}
      </ul>
    </div>
  );
}

export default MyPlaylist;
