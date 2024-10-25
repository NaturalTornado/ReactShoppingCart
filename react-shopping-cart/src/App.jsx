import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
         <div className='header'>
        
        
          <div className='title'>
              Shopping Cart
          </div>
          <div className='cart'>cart</div>

          <div className='pay'>pay</div>
       
      </div>

        <div className='navBar'>
          page links

        </div>

        <div className="mainBox">
          cards

        </div>

      </div>

    </>
  )
}

export default App
