import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Exam from '../containers/Exam/Exam';
import Login from '../containers/Login/Login';
import Result from '../containers/Result/Result';
import { authIsLoggedInSelector } from '../store/auth/selectors';

const AppRoutes = () => {
  const isUserLoggedIn = useSelector(authIsLoggedInSelector);
  return (
    /* A react router. */
    <Routes>
      {/* Login Route */}

      {!isUserLoggedIn && <Route path='/login' element={<Login />} />}

      {/* User Routes */}

      {isUserLoggedIn && (
        <>
          <Route path='/exam' element={<Exam />} />
          <Route path='/result' element={<Result />} />
        </>
      )}

      {/* Redirect to /exam if logged in or to /login if not */}

      <Route
        path='*'
        element={<Navigate to={isUserLoggedIn ? '/exam' : '/login'} />}
      />
    </Routes>
  );
};

export default AppRoutes;
