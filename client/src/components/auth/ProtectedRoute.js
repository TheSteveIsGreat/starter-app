import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider"

// This function will allow the programmer to send protected routes
// to authenticated (logged in) users
const ProtectedRoute = () => {
  const auth = useContext(AuthContext)
  return auth.user ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute