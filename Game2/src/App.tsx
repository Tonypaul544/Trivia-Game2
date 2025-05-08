
import { useState } from 'react'
import Avatar from './images/gameAvatar.png'
import FlipbitLogo from './images/FlipBitLogo.png';
import Sticker from './images/sticker.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flipHeader">
          
          <div id="empty"></div>
          <div className="logoTXT">
            <img src={FlipbitLogo} alt="" className="flipbitLogo" />
          </div>
          
          <img src={Avatar} alt="" className="flipAvatar" />
        </div>
      <div className="flipContainer">
          
          <div className="width">
            <div className="emptyLeft"></div>
            <div className="buttons">
              <button className="button playBTN" id='playBTN'>Play</button>
              <button className="button Tutorial">Tutorial</button>
              <button className="button Leaderboard">Leaderboard</button>
              <button className="button Settings">Settings</button>
              <button className="button Exit">Exit</button>
            </div>

            <div className="right">
              <img src={Sticker} alt="" className="sticker" />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
