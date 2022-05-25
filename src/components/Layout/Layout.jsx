import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Login from '../../containers/Login/Login';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const authState = useSelector((state) => state.auth);
  // const location = useLocation()
  if (!authState.isUserLoggedIn) {
    return <Route {...rest} element={<Navigate to='/login' />} />;
  }
  return <Component {...rest} />;
};

const Layout = () => {
  const authState = useSelector((state) => state.auth);
  const navigtor = useNavigate();

  useEffect(() => {
    // if isUserLoggedIn turned to true redirect to /home
    if (!authState.isUserLoggedIn) {
      navigtor('/login');
    } else {
      navigtor('/home');
    }
  }, [authState.isUserLoggedIn, navigtor]); // triggers when isUserLoggedIn changes

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='*' element={() => '404 Not found.'} /> */}
    </Routes>
  );
};

export default Layout;
