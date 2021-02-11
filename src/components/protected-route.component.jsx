import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from '../contexts/user-context';

export function ProtectedRoute({ component: Component, ...rest }) {
  const userContext = useUserContext();
  
  return (
    <Route
      {...rest}
      render={(props) => (
        userContext.loggedIn
          ? <Component {...props} />
          : <Redirect to="/auth" />
      )}
    />
  );
}