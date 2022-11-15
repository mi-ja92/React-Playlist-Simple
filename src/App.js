import "./App.css";
import Container from "./Container";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/about">About me</Link> |{" "}
      </nav>
      <br />
      <br />
      <Container />
    </div>
  );
}

export default App;
