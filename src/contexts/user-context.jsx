import React, { createContext, useContext, useMemo, useState } from 'react';
import { userApi } from '../lib/user-api';

/**
 * @typedef User
 * @property {number} id
 * @property {string} username
 *
 * @typedef UserContextInitialState
 * @property {User|null} currentUser
 * @property {boolean} isLoggedIn
 * @property {({ username: string, password: string }) => Promise<User|null>} login
 * @property {() => void} logout
 */

/**
 * @type {UserContextInitialState}
 */
const initState = {};
const UserContext = createContext(initState);

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext not found');
  }

  return context;
}

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const isLoggedIn = useMemo(() => !!currentUser, [currentUser]);

  async function login({ username, password }) {
    const user = await userApi.login({ username, password });

    setCurrentUser(user);

    return user;
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        login,
        logout
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}