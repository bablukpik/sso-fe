"use client";

import React from "react";
import { useLoginUserMutation } from "../../services/auth-api";

const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const handleLogin = async () => {
    const credentials = {
      username: "user@email.com",
      password: "password@123",
    };
    try {
      await loginUser(credentials).unwrap();
      // Redirect or handle success
    } catch (error) {
      // Handle error
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
      <a href="/auth/saml">Login with SAML</a>
      <a href="/auth/oauth2">Login with OAuth2</a>
    </div>
  );
};

export default Login;
