import { useEffect, useState } from 'react'
import './App.css'
import Offers from './offers'

import "./add-feature";
function App() {
  const [showOffers, setShowOffers] = useState(false)
  useEffect(() => {
    const randomInterval = setInterval(() => {
      clearInterval(randomInterval)
      setShowOffers(true)
    }, Math.random() * 5000 + 1000)
  }, [])
  return (
    <div>
      <div className="wrap">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="headline">
          <div className="row">
            <div className="col-sm-12">
              <h1>Your Weekday Source for Todays TOP News</h1>
              <h3>We feed you the news so you dont have to.</h3>
            </div>
          </div>
          {showOffers ? <Offers /> :null}
        </div>
      </div>
    </div>
  )
}

export default App
