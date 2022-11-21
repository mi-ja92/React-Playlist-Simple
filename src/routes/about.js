import "./about.css";

export default function About() {
  return (
    <main className="about-main">
      <h1>About</h1>
      <p className="about-p">
        Welcome to my new React app! My name is Michalina and I'm a student at
        Winc Academy. This app is an assignment for the Frond-End Development
        course. That's my first bigger app made in React and I have to say I'm
        really enjoying the simplicity of React.{" "}
      </p>
      <img
        className="foto"
        src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></img>
    </main>
  );
}
