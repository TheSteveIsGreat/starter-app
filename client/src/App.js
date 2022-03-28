import './App.css';
import NavBar from './components/shared/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/Home';
import HomeProtected from './components/auth/HomeProtected';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/shared/NotFound';
import ProtectedRoute from './components/auth/ProtectedRoute';
import FetchUser from './components/auth/FetchUser';

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <>
          <Routes>
            {/* Unprotected */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />

            {/* Protected (need to be logged in to see) */}
            <Route element={<ProtectedRoute />}>
              <Route path='/home' element={<HomeProtected />} />
            </Route>
          </Routes>
        </>
      </FetchUser>
    </>
  );
}

export default App;
