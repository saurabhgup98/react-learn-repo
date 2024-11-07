import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsestateExampleOne from './pages/UsestateExampleOne'
import BgChanger from './pages/BgChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UsestateExampleOne /> */}
      <BgChanger />
    </>
  )
}

export default App
