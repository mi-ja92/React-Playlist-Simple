import React, { useState, useEffect } from "react";
import Form from "./Form";
import MyPlaylist from "./Playlist";
import "./App.css";

function Container() {
  const [inputText, setInputText] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [playlist, setPlaylist] = useState([]);
  // const [filteredSongs, setFilteredSongs] = useState("all");
  // const [filter, setFilter] = useState([]);
  // useEffect(() => {
  //   filterSongs();
  // }, [playlist, filteredSongs]);

  // const testFilter = () => {
  //   setFilter(playlist.filter((song) => song.genre));
  // };

  // const filterSongs = () => {
  //   switch (filteredSongs) {
  //     case "rock":
  //       setFilter(
  //         playlist
  //           .filter((song) => song.genre.includes("Rock"))
  //           .map((playlist) => playlist)
  //       );
  //       break;
  //     case "alternative":
  //       setFilter(
  //         playlist
  //           .filter((song) => song.genre.includes("Alternative"))
  //           .map((playlist) => playlist)
  //       );
  //       break;
  //     case "pop":
  //       setFilter(
  //         playlist
  //           .filter((song) => song.genre.includes("Pop"))
  //           .map((playlist) => playlist)
  //       );
  //       break;
  //     default:
  //       setFilter(playlist);
  //       break;
  //   }
  // };

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
        // filteredSongs={filteredSongs}
        // setFilteredSongs={setFilteredSongs}
      />
      <br />
      <br />
      <MyPlaylist setPlaylist={setPlaylist} playlist={playlist} />
    </div>
  );
}

export default Container;
