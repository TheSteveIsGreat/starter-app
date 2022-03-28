import React, { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

const HomeProtected = () => {
  const auth = useContext(AuthContext)

  return (
    <>
      <h1>Home Protected</h1>
      <p> Hello {auth.user.email}!</p>
      <p>{JSON.stringify(auth)}</p>
    </>
  )
}

export default HomeProtected