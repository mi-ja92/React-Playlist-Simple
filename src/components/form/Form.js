import React from "react";
import "./form.css";

function Form({
  setInputText,
  playlist,
  setPlaylist,
  inputText,
  artist,
  genre,
  rating,
  setArtist,
  setGenre,
  setRating,
}) {
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const inputArtistHandler = (event) => {
    console.log(event.target.value);
    setArtist(event.target.value);
  };

  const inputGenreHandler = (event) => {
    setGenre(event.target.value);
  };

  const inputRatingHandler = (event) => {
    setRating(event.target.value);
  };

  const submitPlaylistHandler = (event) => {
    event.preventDefault();
    setPlaylist([
      ...playlist,
      {
        text: inputText,
        artist,
        genre,
        rating,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
    setArtist("");
    setGenre("");
    setRating("");
  };

  return (
    <form className="form">
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        name="Song title"
        placeholder="Song title"
      />
      <input
        type="text"
        value={artist}
        onChange={inputArtistHandler}
        name="Artist"
        placeholder="Artist"
      />
      <label>
        <select
          className="selectcontainer"
          value={genre}
          onChange={inputGenreHandler}
          name="genre"
        >
          <option className="select" value="blank">
            {" "}
            Genre
          </option>
          <option className="select" value="Rock">
            {" "}
            Rock{" "}
          </option>
          <option className="select" value="Pop">
            Pop{" "}
          </option>
          <option className="select" value="Alternative">
            Alternative
          </option>
        </select>
      </label>

      <label>
        <select
          className="selectcontainer"
          value={rating}
          onChange={inputRatingHandler}
          name="rating"
        >
          <option className="select" value="blank">
            {" "}
            Rating
          </option>
          <option className="select" value="1">
            {" "}
            1
          </option>
          <option className="select" value="2">
            2{" "}
          </option>
          <option className="select" value="3">
            3
          </option>
          <option className="select" value="4">
            4
          </option>
          <option className="select" value="5">
            5
          </option>
        </select>
      </label>

      <button className="button1" type="button" onClick={submitPlaylistHandler}>
        Add song to playlist
      </button>
      <br />
      <br />
    </form>
  );
}

export default Form;
