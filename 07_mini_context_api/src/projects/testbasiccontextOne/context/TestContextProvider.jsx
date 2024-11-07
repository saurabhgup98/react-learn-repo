import React, { useState } from 'react'
import TestContext from './TestContext'

const TestContextProvider = ({children}) => {
  const [loggedIn,setLoggedIn] = useState(false);
  return (
    <TestContext.Provider value={{loggedIn,setLoggedIn}}>
        {children}
    </TestContext.Provider>
  )
}

export default TestContextProvider