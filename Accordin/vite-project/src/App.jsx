import React from "react";
import { useState } from "react";
import Questions from "./Questions";
import "./App.css";
function App() {
  const [color,setcolor]=useState('white');

 function c(){
  setcolor(color === "white" ? "black" : "white");
 }
  return (
    <div className={color}>
      <div className="p-10 bg-gray-200 min-h-screen flex justify-center items-center">
      <Questions />
      <button onClick={c}>Click me</button>

      </div>
    </div>
  );np
}
export default App;
