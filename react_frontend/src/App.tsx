import React from 'react'
import './App.css'

// import pages
import Test from './__tests__/pages/Test'

// format App function to be as the typescript standard
const App: React.FC = () => {
  return (
    <div className='App'>
      <Test />
    </div>
  )
}

export default App
