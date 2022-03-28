// THIS COMPONENT WILL SERVE AS A WAY TO 'CONSUME' AND 'PROVIDE' DATA

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Context provides a way to pass data through the component tree 
// without having to pass props down manually at every level.
// Context Functional Version
export const AuthContext = React.createContext()

// Context Class Version
// export const AuthConsumer = AuthContext.Consumer

const AuthProvider = ({children}) => {
  // This function is returned from the useNavigate hook and allows 
  // you to change the URL whenever you want. 
  const navigate = useNavigate()

  // This hook will allow you to have only authenticated users
  // Null: The user is not logged in
  const [user, setUser] = useState (null)

  // This function will handle new user registration
  // It is called when the submit button is clicked
  // on the Register.js component
  const handleRegistration = async (user) => {
    try {
      let res = await axios.post('/api/auth', user)
      // Sets user data to data provided
      setUser(res.data.data)
      // Auto navigates to the Login page
      navigate('/login')
    } catch (error) {
      alert ('Error: Unable to register. Email must be valid and unique.' + 
      'Password must be correct length.')
      console.log(error)
    }
  }

  // This function will handle the login of a registered user
  const handleLogin = async (user) => {
    try {
      // Assuming email and password are valid, this call will
      // give us the user info back from the DB
      let res = await axios.post('/api/auth/sign_in', user)
      setUser(res.data.data)
      // Navigates to UserProtected component
      navigate('/home')
    } catch (error) {
      alert ('Error logging in. Is your email and password valid?')
      console.log(error)
    }
  }

  // This function will handle the user logout
  const handleLogout = async () => {
    console.log('logging out user')
    try {
      await axios.delete('/api/auth/sign_out')
      setUser(null)
      navigate('/login')
    } catch (error) {
      alert ('Error logging out')
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, handleRegistration, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider