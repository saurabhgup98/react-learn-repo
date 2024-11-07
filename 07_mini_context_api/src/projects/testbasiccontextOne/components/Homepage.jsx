import React, { useContext } from 'react'
import TestContext from '../context/TestContext';

const Homepage = () => {
    const {loggedIn} = useContext(TestContext);
  return (
    <>
        { loggedIn && <div>Login Successful!</div>}
        { !loggedIn && <div>Please Login</div>}
    </>
    
  )
}

export default Homepage