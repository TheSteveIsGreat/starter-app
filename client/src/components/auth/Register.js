import { useContext, useState } from "react"
import { parsePath, useParams } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const Register = () => {
  const [email, setEmail] = useState('test1@test.com')
  const [password, setPassword] = useState('123456')
  const [name, setName] = useState('Test User')
  const auth = useContext(AuthContext)

  // This is not needed, but makes the UX nicer
  // const [confirmPassword, setConfirmPassword] = useState('')

  // Function to prevent page reload and 
  // call handleRegister from the AuthProvider.js component
  const handleSubmit = (e) => {
    e.preventDefault()

      // Thanks to devise_token_auth set in DB, 
      // Email must be a unique and 'valid' email
      // Password must be greater than 6 chars in length
      (auth.handleRegistration({ email, password, name }))
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Register</button>
      </form>
    </>
  )
}

export default Register