import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";

const FetchUser = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  // [] makes this act as componentDidMount
  useEffect(() => {
    checkAuth();
  }, []);
  
  // Function to check for access token. If valid, allows the user to see routes.
  // User won't see routes if not authenticated.
  const checkAuth = async () => {
    // The localStorage read-only property allows you to access 
    // a Storage object for the Document's origin; 
    // the stored data is saved across browser sessions.
    // .getItem reads the localStorage item.
    if (user || !localStorage.getItem("access-token")) {
      setLoaded(true);
      return;
    }
    // Sometimes the user is not authenticated but has access token in local storage
    // If the token is valid, this will grab and set the user
    try {
      const res = await axios.get("/api/auth/validate_token");
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
      console.log("unable to validate token");
    } finally {
      //Block of code to be executed regardless of the try / catch result
      setLoaded(true);
    }
  };

  // return nested jsx in app.js if loaded (ie user has been checked to see
  // if they are auth or not). If not loaded, returns null, i.e. nothing in the 
  // fetch user in app.js will be loaded (return 0 routes)
   return loaded ? props.children : null;
};

export default FetchUser;