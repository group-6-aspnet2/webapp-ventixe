import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://localhost:7144/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Sign in failed.");
      }

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("userId", data.userId);
      setError("");
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signin-input"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signin-input"
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
        {error && <p className="signin-error">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
