import React, { useContext } from 'react'
import TestContext from '../context/TestContext';

const Login = () => {

  const {loggedIn,setLoggedIn} = useContext(TestContext);

  const handleLoginBtnClick = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  }
  
  return (
    <button onClick={handleLoginBtnClick}>Login</button>
  )
}

export default Login