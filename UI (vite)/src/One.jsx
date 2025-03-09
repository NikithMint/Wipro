import React, { useState } from 'react'
import "./One.css"
const One = () => {

   
    const data = [
        {
            image:"https://t3.ftcdn.net/jpg/05/80/61/14/360_F_580611440_4oCo3gd5XcCkpaRYyiO7QaS67rKEvLgI.jpg",
            name:"MID GREY SHARKSKIN SUIT",
            price: "$ 1930",
            size: 48,
            color: "grey"
        },
        {
            image:"https://images.jdmagicbox.com/quickquotes/images_main/ladies-long-coat-2220556289-7xrjwtzp.jpg",
            name:"BROWN PRINCE OF WALES LINEN SPOART COAT",
            price: "$ 1930",
            size: 48,
            color: "grey"
        }
    ];
    const [counts, setCounts] = useState(new Array(data.length).fill(0));
    const [summ,setsumm] = useState(new Array(data.length).fill(0));

    const inc = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts]; // Copy array
            newCounts[index] += 1; // Modify only the required element
            return newCounts;
        });
    };
    
    const dec = (index) => {
        setCounts((prevCounts) => {
            const newCounts = [...prevCounts]; 
            newCounts[index] = Math.max(newCounts[index] - 1, 0); // Ensure count doesn't go below 0
            return newCounts;
        });
    };
  return (
    <div>
        <div className='shoppingbag'>
            <h1>SHOPPING BAG</h1>
        </div>
        <div className="cmp-box">
            <div className="left-box">
                
                    {data.map((txn, index) => (
                    <div className='loop'>    
                        <img src={txn.image}></img>
                        <div className='text'>
                            <h4>{txn.name}</h4>
                            <h4>{txn.price}</h4>
                            <div className='small'>
                                <div>
                                <h4>SIZE</h4>
                                <h4>{txn.size}</h4>
                                </div>
                                <div>
                                <h4>PRICE</h4>
                                <h4>{txn.price}</h4>
                                </div>
                            </div>
                            <div className='butt'>
                                <button onClick={() => inc(index)}> + </button>
                                <h3>{counts[index]}</h3>
                                <button onClick={() => dec(index)}> - </button>
                            </div>


                        </div>
                    </div> 
                    ))}
                
            </div>
            <div className="order-summary">
                <h1>ORDER SUMMARY</h1>
                <div className='inside-order-summary'>
                    <div className='sub'>
                        <h3>SUBTOTAL</h3>
                        <h3> $7245 </h3>
                    </div>
                    <div className='shop'>
                        <h3>SHOPPING</h3>
                        <h3>FREE</h3>
                    </div>
                    <div className='post'>
                        <h3>POSTAGE</h3>
                        <h3>$20</h3>
                    </div>
                    <div className='total'>
                        <h3>TOTAL</h3>
                        <h3>$7245</h3>
                    </div>
                </div>
                <button>CHECK OUT</button>
            </div>
        </div>
    </div>    
  )
}
export default One
