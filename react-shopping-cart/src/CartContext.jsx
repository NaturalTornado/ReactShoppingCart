// CartContext.jsx - Rev-01

import React, { createContext, useState } from 'react';

// Create a context for the total count.
export const CartContext = createContext();

// Create a provider component.
export const CartProvider = ({ children }) => {
  // State to track the total number of items in the cart.
  const [total, setTotalCount] = useState(0);

  // Function to update the total count.
  const updateTotalCount = (newTotal) => {
    setTotalCount(newTotal);
  };

  return (
    <CartContext.Provider value={{ total, updateTotalCount }}>
      {children}
    </CartContext.Provider>
  );
};
