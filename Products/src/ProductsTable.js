import React, { useState } from "react";
import './ProductsTable.css';
const ProductsTable = () => {
  const [products] = useState([
    { name: "Nike Jordan", tags: "Unisex", tagss: "Shoe", var: 3, price: "Rs45.00", stock: 99, low: 500 },
    { name: "Addidas", tags: "Unisex" ,tagss: "Shoe" , var: 3, price: "Rs45.00", stock: 999, low: 500 },
    { name: "Puma", tags: "Unisex",tagss: "Shoe", var: 3, price: "Rs45.00", stock: 999, low: 500 },
    { name: "New Balance", tags: "Unisex", tagss: "Shoe", var: 3, price: "Rs45.00", stock: 99, low: 500 },
    { name: "Micheal Kors", tags: "Unisex",tagss: "Shoe", var: 3, price: "Rs45.00", stock: 999, low: 500 },
    { name: "Apple Jacket", tags: "Unisex", tagss: "Shoe", var: 3, price: "Rs45.00", stock: 999, low: 500 },
    { name: "Ferrari", tags: "Unisex", tagss: "Shoe", var: 3, price: "Rs45.00", stock: 99, low: 500 },
  ]);
  const [selected,setselected] = useState([]);




  function fcn(product){
    setselected((e)=>
      
      e.includes(product)
    ? e.filter((p)=>p!==product) // remove the product
    :[...e,product] // add the product 
    );
  };

  const handleSubmit = () =>{
    alert('selected Products:' + selected.map(p=>p.name).join(","));
    // setselected[" "];
  }


  

  return (
    <div >
      <h2>Products</h2>
      
      
      <table>
        <thead>
          <tr >
            <th >Select</th>
            <th >Product</th>
            <th >Tags</th>
            <th >Outlet Var</th>
            <th >Price</th>
            <th>Stock</th>
            <th >Low</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} >
              <td >
                <input type="checkbox" onChange={()=>fcn(product)} />
              </td>
              <td >{product.name}</td>
              <button>
              <td>{product.tags}</td>
              </button>
              
              <button>
              <td>{product.tagss}</td>
              </button>
              
              
              
              <td >{product.var}</td>
              <td >{product.price}</td>
              <td >{product.stock}</td>
              <td >{product.low}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
};

export default ProductsTable;
