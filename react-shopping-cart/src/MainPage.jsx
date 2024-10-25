// MainPage.jsx - Rev-04

import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './App.css';
import './MainPage.css';
import { CartContext } from './CartContext'; // Import the CartContext

// Properly declare the MainPage component using the 'const' keyword.
const MainPage = () => {
  // Consume the CartContext to get the 'total' state.
  const { total } = useContext(CartContext);

  return (
    <>
      <div className='body'>
        <div className='header'>
          <div className='title'>
            Shopping Cart
          </div>
          <div className='cart'>cart</div>
          {/* Display the total count in the cartCount div */}
          <div className='cartCount'>
            <p>Total Items: {total}</p>
          </div>
          <div className='pay'>pay</div>
        </div>

        <div className='navBar'>
          {/* Placeholder for page links */}
          page links

          <Link to="mainBoxCard">Main Page</Link> {/* Relative to /profile */}
          <Link to="Shop">Shop</Link> {/* Relative to /profile */}
        </div>

        <div className='mainBox'>
          {/* Placeholder for cards */}
          cards

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainPage;
