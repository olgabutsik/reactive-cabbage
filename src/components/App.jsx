import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import HomePage from 'pages/HomePage/HomePage';
import Income from 'components/Income/Income';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import Expenses from 'components/Expenses/Expenses';
import { ReportPage } from 'pages/ReportPage/ReportPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshToken } from 'redux/auth/operation';
import { Navbar } from './Navbar/Navbar';
import AnimatCursor from 'components/AnimatedCursor/AnimatedCursor';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <div>
      <AnimatCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="/expenses"
            element={
              <PrivateRoute redirectTo="/login" component={<Expenses />} />
            }
          />
          <Route
            path="/income"
            element={
              <PrivateRoute redirectTo="/login" component={<Income />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/expenses"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/expenses"
                component={<RegisterPage />}
              />
            }
          />
        </Route>
        <Route
          path="/reports"
          element={
            <PrivateRoute redirectTo="/login" component={<ReportPage />} />
          }
        />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
};
