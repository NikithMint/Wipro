import React from 'react'
import Card from './Card'
const App = () => {
  const data = [
    {
      name: "Nike Air pegasus",
      subname: "by Nike",
      img: "https://5.imimg.com/data5/ANDROID/Default/2023/7/323766133/PY/VE/NY/160274098/product-jpeg-500x500.jpg",
      price: "$180",
      description: "your workhorse with wing returns",
      color: "pink"
      
    },
    {
      name: "Nike ZoomX",
      subname: "by Nike",
      img: "https://static.nike.com/a/images/t_default/2c7ec36b-06e3-4734-820b-a78f30bc298a/ZOOMX+INVINCIBLE+RUN+3+WIDE.png",
      price: "$320",
      description: "The Nike zoomX vaporfly next% clears",
      color: "blue"
    },
  ]  



  return (
    <div style={{gap: "20px", padding: "20px" }}>
      {data.map((dta, index) => (

        
      <Card key={index} {...dta} />


      ))

      }

      
    </div>
  )
}

export default App
