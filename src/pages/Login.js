import React, { useState } from "react";
import "@fontsource/poppins"; // Ensure you have the Poppins font

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        backgroundColor: "#121212", // Dark background for the entire page
        color: "#fff", // White text for better readability
        fontFamily: "'Poppins', sans-serif", // Using Poppins font
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "#20202cad",
          color: "white",
          borderRadius: "10px", // Rounded corners
          padding: "2rem", // Padding inside the form
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Shadow effect
        }}
      >
        <h1 className="text-center" style={{ fontWeight: "bold", marginBottom: "1.5rem" }}>
          Log In
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="username" style={{ color: "#ffffff", fontWeight: 500 }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              style={{
                width: "100%",
                backgroundColor: "#181129",
                color: "white",
                border: "1px solid #5b56f7",
                borderRadius: "5px",
                padding: "0.5rem", // Padding inside the input
                marginTop: "0.5rem",
              }}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="usernameHelp"
              required
            />
            <div id="usernameHelp" style={{ color: "white", marginTop: "0.5rem" }}>
              We'll never share your details with anyone else.
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password" style={{ color: "#ffffff", fontWeight: 500 }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              style={{
                width: "100%",
                backgroundColor: "#181129",
                color: "white",
                border: "1px solid #5b56f7",
                borderRadius: "5px",
                padding: "0.5rem", // Padding inside the input
                marginTop: "0.5rem",
              }}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#5b56f7",
              border: "none", // Remove default border
              borderRadius: "5px",
              padding: "10px", // Button padding
              width: "100%", // Full width button
              fontWeight: "bold", // Bold text
              cursor: "pointer", // Pointer cursor on hover
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
