import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const LearnContext = () => {
  return (
    <UserContextProvider>
      <h1>React Context api mini</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default LearnContext