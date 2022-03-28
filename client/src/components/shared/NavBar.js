import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const NavBar = () => {
  const auth = useContext(AuthContext)

  // Class method
  // const {user} = useContext(AuthContext);
  // if(user) => logout
  // if(!user) => login/register  

  // Function to render links/buttons on the right side of NavBar
  const renderRightNav = () => {
    if (auth.user) {
      return <button onClick={auth.handleLogout}>Logout</button>
    }
    return (
      <>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </>
    )
  }

  // Function to render links on left side of NavBar
  // Different links will appear depending on user authentication
  const renderLeftNav = () => {
    if (auth.user) {
      return (
        <>
          <Link to='/'>Home</Link>
          <Link to='/home'>Home Protected</Link>
        </>
      )
    }
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>{renderLeftNav()}</div>
      <div>{renderRightNav()}</div>
    </div>
  )
}

export default NavBar