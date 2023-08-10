import React from 'react'
import {mount} from 'marketing/MarketingApp'
import {BrowserRouter} from 'react-router-dom'
import MarketingApp from './components/MarketingApp'

console.log(mount)
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}

export default App