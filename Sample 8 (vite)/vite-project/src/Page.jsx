import React from 'react'
import "./Page.css"
const Page = () => {
  return (
    <div className='Main'>
        <div className='left'>
            <h3>100 % Natural Products</h3>
            <h1>MUSHROOM</h1>
            <h3>Mushrooms are edible fungus that can provide several important nutrients. The many kinds of Mushrooms have varying compositions and nutritional profiles.</h3>
            <div className='leftdown'>
                <button> Buy Now</button>
                <button> Contact Us</button>
            </div>
        </div>
        <div className='imgright'>
            <img src="https://thumbs.dreamstime.com/b/fly-agaric-mushroom-image-33837161.jpg"></img>
        </div>
    </div>
  )
}

export default Page
