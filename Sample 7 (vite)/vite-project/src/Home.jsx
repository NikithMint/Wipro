import React from 'react'
import { useNavigate } from "react-router";

const Home = () => {
    let navigate = useNavigate();

function logout(){
    navigate("/Logout")
}
  return (
    <div>
        <h1>This is Home</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
