import React, { useState } from "react";
import Form from "./Form";
import MyPlaylist from "./Playlist";
import "./App.css";
import Song from "./SongData";

function Container() {
  const [inputText, setInputText] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [playlist, setPlaylist] = useState([]);
  // const [status, setStatus] = useState("all");
  // const [filteredSongs, setFilteredSongs] = useState([]);
  // const filterHandler = () => {
  //   switch (status) {
  //     case "song":
  //       setFilteredSongs(playlist.sort());
  //       break;
  //       case "Rock":
  //       setFilteredSongs(playlist.filter => song.genre.includes("Rock"))
  //   }

  // }

  return (
    <div className="container">
      <h1>My Playlist App </h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        artist={artist}
        setArtist={setArtist}
        genre={genre}
        setGenre={setGenre}
        rating={rating}
        setRating={setRating}
        playlist={playlist}
        setPlaylist={setPlaylist}
      />
      <br />
      <br />
      <h1>My Playlist</h1>

      <MyPlaylist setPlaylist={setPlaylist} playlist={playlist} />
    </div>
  );
}

export default Container;
