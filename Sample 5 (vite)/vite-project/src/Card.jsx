import React from 'react'
import "./Card.css"
const Card = ({name,subname,img,price,description,color}) => {
  return (
    <div>
        
        <div className={`first ${color}`}>
            
            <img src={img} alt="error" style={{height:"200px"}}/>
                
                <div className='middle'>
                
                    <h3>{name}</h3>
                    <h5>{subname}</h5>
                    <h4>{description}</h4>
                    <div className='last'>
                        <h3>{price}</h3>
                        <button>buy</button>
                    </div>
                </div>
            




        </div>



      
    </div>
  )
}

export default Card
