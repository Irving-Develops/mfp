import React from 'react'
import {mount} from 'marketing/MarketingApp'
import {BrowserRouter} from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'

console.log(mount)
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}

export default App