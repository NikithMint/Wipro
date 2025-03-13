import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const App = () => {

  const [delta,setdelta]=useState([])


  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then((response) =>console.log(response))
    .then((res) =>setdelta(res.data))
    console.log("useeffect executed")
  },[])


  return (
    <div className="min-h-screen flex justify-center items-center bg-beige-100 p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        
          <Card delta={delta}/>
      
      </div>
    </div>
  );
};

export default App;
