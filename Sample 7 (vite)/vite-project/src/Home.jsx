import React from 'react'
import { useNavigate } from "react-router";
import "./Home.css"
const data = [
    { image:"https://www.shutterstock.com/image-vector/mastercard-icon-orange-red-260nw-2457881495.jpg" },
    { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdRE4elIptBYNu_D2M6TxSKgXooAfkt0fRQ&s" },
    { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdRE4elIptBYNu_D2M6TxSKgXooAfkt0fRQ&s" },
    { image:"https://play-lh.googleusercontent.com/yVncWQyGct8JJ39fxiNoEWRcbNzEXPqAYYs8p9J2gJlqnzXyzEsFfugg_qOGLBt3vUk=w600-h300-pc0xffffff-pd"},
    { image:"https://www.shutterstock.com/image-vector/mastercard-icon-orange-red-260nw-2457881495.jpg" },
    { image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdRE4elIptBYNu_D2M6TxSKgXooAfkt0fRQ&s" },
];
const Home = () => {
    let navigate = useNavigate();

function logout(){
    navigate("/Logout")
}
  return (
    <div >
        <div className="ig">
        {data.map((txn, index) => (
            <div key={index}>
              
              <img src={txn.image} className="i"></img>
              
            </div>
          ))}
          </div>
        <button onClick={logout}>Logout</button>


    </div>
  )
}

export default Home
