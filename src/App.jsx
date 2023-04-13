import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import logo from "../src/images/logo.svg"
import rockIcon from "../src/images/icon-rock.svg"
import paperIcon from "../src/images/icon-paper.svg"
import scissorIcon from "../src/images/icon-scissors.svg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="score">
          <p className='score__text'>Score</p>
          <p className='score__value'>0</p>
        </div>
      </header>
      <main>
        <div className="game-board game-board-triangle">
          <button className="circle-btn btn-paper">
            <img src={paperIcon} className="img img-paper" alt="" />
          </button>
          <button className="circle-btn btn-scissors">
            <img src={scissorIcon} className="img img-paper" alt="" />
          </button>
          <button className="circle-btn btn-rock">
            <img src={rockIcon} className="img img-paper" alt="" />
          </button>
        </div>
      </main>
      {/* <div className="final-board">
          <button className="circle-btn btn-paper">
            <img src={paperIcon} className="img img-paper" alt="" />
          </button>

          <div className="outcome">
            <p>You win</p>
            <button className="btn-restart">Play Again</button>
          </div>

          <button className="circle-btn btn-rock">
            <img src={rockIcon} className="img img-paper" alt="" />
          </button>
      </div> */}
    </div>
  )
}

export default App
