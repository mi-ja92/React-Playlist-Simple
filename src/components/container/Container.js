import React, { useState, useEffect } from "react";
import Form from "../form/Form";
import MyPlaylist from "../playlist/Playlist";

function Container() {
  const [inputText, setInputText] = useState("");

  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  useEffect(() => {
    JSON.parse(localStorage.getItem("playlist"));
  }, [playlist]);

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
      <MyPlaylist setPlaylist={setPlaylist} playlist={playlist} />
    </div>
  );
}

export default Container;
