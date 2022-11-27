import { React } from "react";
import "./song.css";

function Song({ playlist, setPlaylist, text, artist, genre, rating, song }) {
  const deleteHandler = () => {
    setPlaylist(playlist.filter((element) => element.id !== song.id));
  };
  // useEffect(() => {
  //   window.localStorage.setItem("playlist", JSON.stringify(playlist));
  // }, [playlist]);

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("playlist"));
  // }, [playlist]);

  return (
    <li className="song">
      <p className="title">{text}</p>
      <p className="title"> {artist}</p>
      <p> {genre}</p>
      <p> {rating}</p>
      <button onClick={deleteHandler} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default Song;
