import React from "react";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>My Portfolio</h1>
        <p>Hello, I’m Harish  | CSE Student</p>
      </header>

      <div className="cards-container">
        <Card
          title="Coding "
          description="I enjoy solving problems with Java, Python, and React."
        />
        <Card
          title="Design "
          description="I like creating clean and modern UI/UX designs."
        />
        <Card
          title="Photography "
          description="Capturing moments is my creative escape."
        />
        <Card
          title="Gaming "
          description="I relax by playing strategy and adventure games."
        />
      </div>
    </div>
  );
}

export default App;
