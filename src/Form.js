import React from "react";

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
  //   const allValuesHandler = (event) => {
  //     console.log(event.target.value);
  //     setInputText(event.target.value);
  //   };

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
        <select value={genre} onChange={inputGenreHandler} name="genre">
          <option value="blank"> </option>
          <option value="Rock"> Rock </option>
          <option value="Pop">Pop </option>
          <option value="Alternative">Alternative</option>
        </select>
      </label>

      <label>
        <select value={rating} onChange={inputRatingHandler} name="rating">
          <option value="blank"> </option>
          <option value="one"> 1</option>
          <option value="two">2 </option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <button type="button" onClick={submitPlaylistHandler}>
        Add song to playlist
      </button>
    </form>
  );
}

export default Form;
