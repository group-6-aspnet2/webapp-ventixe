import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://localhost:7144/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password}),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Sign up failed.");
      }

      setError("");
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
    };

    return (
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signup-input"
          />
          <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signup-input"
          />
          <button type="submit" className="signup-button">Sign Up</button>
          {error && <p className="signup-error">{error}</p>}
        </form>
      </div>
    );
  };

  export default SignUp;