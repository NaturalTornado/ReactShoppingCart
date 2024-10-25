// Shop.jsx - Rev-06

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// Import images from the assets folder.
import batWithNails from '/assets/batWithNails.png';
import birdTeeth from '/assets/birdTeeth.png';
import milkSteak from '/assets/milkSteak.png';
import WormHat from '/assets/WormHat.png';

import './Shop.css';

// Import the CartContext
import { CartContext } from './CartContext';

// Define the Shop component.
const Shop = () => {
  // Consume the CartContext to update the total count.
  const { updateTotalCount } = useContext(CartContext);

  // Array of imported images.
  const picArray = [
    batWithNails,
    birdTeeth,
    milkSteak,
    WormHat
  ];

  // State to track the counts for each item using a single array.
  const [itemCounts, setItemCounts] = useState([0, 0, 0, 0]);

  // Function to handle updates to item counts.
  const updateItemCount = (index, amount) => {
    setItemCounts((prevCounts) => {
      // Calculate the new count, ensuring it doesn't go below 0.
      const updatedCounts = [...prevCounts];
      updatedCounts[index] = Math.max(0, prevCounts[index] + amount);

      // Update the total count whenever an item count changes.
      const newTotal = updatedCounts.reduce((acc, count) => acc + count, 0);
      updateTotalCount(newTotal); // Update the total count in the context.

      console.log("Counts: ", updatedCounts);
      console.log("New Total Counts: ", newTotal);

      return updatedCounts;
    });
  };

  // Use the 'map()' function to iterate over the images and render them.
  return (
    <div className="shopContainer">
      {picArray.map((pic, index) => (
        <div className="shopBlock" key={index}>
          <div className="shopImgBox">
            <img src={pic} alt={`Image ${index + 1}`} />
          </div>

          <div className="purchaseBox">
            {/* Add to Cart button to increase count by 1 */}
            <button 
              className="addToCart"
              onClick={() => updateItemCount(index, 1)}
            >
              Add to Cart
            </button>

            {/* Input to display and change quantity with arrow inputs */}
            <input 
              type="number" 
              name="changeQty" 
              id="changeQty"
              value={itemCounts[index]}
              // Handle changes in quantity with arrow keys or manual input
              onChange={(e) => {
                const newValue = Math.max(0, parseInt(e.target.value) || 0);
                updateItemCount(index, newValue - itemCounts[index]);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
