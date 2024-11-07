import React from 'react'
import TestContextProvider from './context/TestContextProvider'
import Login from './components/Login'
import Homepage from './components/Homepage'

const TestBasicContextOne = () => {
  return (
    <TestContextProvider>
      <Login/>
      <Homepage />
    </TestContextProvider>
  )
}

export default TestBasicContextOne