import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './Action.jsx';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = { id: 1, name: 'Laptop', price: 1000 };
    dispatch(addToCart(newItem));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleAddToCart}>Add Laptop to Cart</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
