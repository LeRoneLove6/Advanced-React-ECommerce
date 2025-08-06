import React from 'react';

type CartProps = {
  items: { name: string }[];
};

const Cart: React.FC<CartProps> = ({ items }) => {
  return (
    <div data-testid="cart">
      <h3>Cart</h3>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
