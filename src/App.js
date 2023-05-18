import React from 'react'
import './App.css'
import Header from './components/Header'
import SwitchPage from './helpers/switchPage'

const App = () => {
  return (
    <div className="mainscreen">
      <Header />
      <SwitchPage />
    </div>
  )
}

export default App
