import React from "react";
import Card from "./Card";
import "./Card.css"; // Import the CSS for styling

function App() {
  return (
    <div className="Complete">
      <Card title="Revenue" value="$435,756" bgColor="green" />
      <Card title="Total Users" value="93,656"bgColor="black" />
    </div>
  );
}

export default App;
