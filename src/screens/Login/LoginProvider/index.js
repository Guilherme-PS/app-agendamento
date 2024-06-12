import React, { useState, createContext, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLogged, setLogged] = useState(false);
    const [User, setUser] = useState("");
  
    const handleLogin = (status, id) => {
      setLogged(status);
      setUser(id);
    };
  
    return (
      <LoginContext.Provider value={{ isLogged, User, handleLogin }}>
        {children}
      </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);