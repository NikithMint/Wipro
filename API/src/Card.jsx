import React from "react";


const Card = ({delta = [] }) => {
  return (
 
        <div>
        {
        delta && delta.map((i)=>(
        <div className='Movie'>
         
        <h1>{i.id}</h1>
        <h2>{i.title}</h2>
        <h3>{i.body}</h3>
        
        
      
        <br></br>
        <br></br>
        
          
          
          
        </div> 
      ))
      }
      
      
          
      </div>

  );
};

export default Card;
