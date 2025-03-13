import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc, rating, progress, color, delta = [] }) => {
  return (
    <motion.div>
        <div>
        {
        delta && delta.map((i)=>(
        <div className='Movie'>
         
        <h1>{i.id}</h1>
        <br></br>
        <br></br>
        
          
          
          
        </div> 
      ))
      }
      
      
          
      </div>
    </motion.div>
  );
};

export default Card;
