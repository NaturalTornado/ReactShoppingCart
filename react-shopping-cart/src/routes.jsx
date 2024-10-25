// Rev-01

import React from 'react'; // Import React to ensure JSX is properly interpreted.
import MainPage from './MainPage';
import ErrorPage from './ErrorPage';

// Import necessary components from React Router
import { createBrowserRouter } from 'react-router-dom';

import MainBoxCard from './mainBoxCard';
import Shop from './Shop';

// Define the routes for the application.
const routes = [
  {
    path: '/',
    element: <MainPage />, // Main component to render for the root path.
    errorElement: <ErrorPage />, // Fallback component in case of an error.
    children: [
      {
          path: 'MainBoxCard',
          element: < MainBoxCard />,
      },

      {
          path: 'Shop',
          element: < Shop />,

      },

    ],
  },
];

// Export the router configuration for use in the main application.
export default routes;
