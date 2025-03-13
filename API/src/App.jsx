import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";


const App = () => {

  const [delta,setdelta]=useState([])
  const [count,setcount]=useState(0)


  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then((response) =>console.log(response))
    .then((res) =>setdelta(res.data))
    console.log("useeffect executed")
  },[])


  return (
    <div>
      <div>
        
          <Card delta={delta}/>
          
      
      </div>
      
    </div>
  );
};

export default App;
