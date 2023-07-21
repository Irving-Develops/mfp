import React from 'react'
import {mount} from 'marketing/MarketingApp'
import MarketingApp from './components/MarketingApp'

console.log(mount)
const App = () => {
  return (
    <div>
      <MarketingApp />
    </div>
  )
}

export default App