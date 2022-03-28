import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const Login = () => {
  const [email, setEmail] = useState('test1@test.com')
  const [password, setPassword] = useState('123456')
  const auth = useContext(AuthContext)

  // This is not needed, but makes the UX nicer
  // const [confirmPassword, setConfirmPassword] = useState('')

  // Function to prevent page reload and 
  // call handleLogin from the AuthProvider.js component
  const handleSubmit = (e) => {
    e.preventDefault()
    auth.handleLogin({email, password})
  }
  
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login