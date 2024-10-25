// main.jsx - Rev-02

import React from 'react'; // Import React to ensure JSX is properly interpreted.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import routes from './routes';
import { CartProvider } from './CartContext'; // Import CartProvider from CartContext

// Import necessary styles and components.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// Create the router instance using the provided route configuration.
const router = createBrowserRouter(routes);

// Initialize the React application and render it to the 'root' div in index.html.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the RouterProvider with CartProvider to make the context available globally */}
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
