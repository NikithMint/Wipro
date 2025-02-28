import React from "react";
import Card from "./Card";
import "./Card.css";

function App() {
  const Data = [
    {
      owner: { name: "5811EX", avatar: "https://i.pravatar.cc/40?img=1" },
      creator: { name: "45TY87", avatar: "https://i.pravatar.cc/40?img=2" },
      image: "https://thumbs.dreamstime.com/b/smiling-black-man-4725389.jpg", // Replace with actual image URL
      price: "5.65",
      usdPrice: "10,344",
      color: "black",
    },
    {
      owner: { name: "23WCFV", avatar: "https://i.pravatar.cc/40?img=3" },
      creator: { name: "STS664", avatar: "https://i.pravatar.cc/40?img=4" },
      image: "https://static.vecteezy.com/system/resources/thumbnails/027/896/292/small_2x/realistic-vector-a-young-girl-with-pet-cats-by-ai-generated-photo.jpg", // Replace with actual image URL
      price: "4.65",
      usdPrice: "8,709.66",
      color: "blue",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {Data.map((dta, index) => (

        
        <Card key={index} {...dta} />
        
        
      ))
      
      }
    </div>
  );
}

export default App;
