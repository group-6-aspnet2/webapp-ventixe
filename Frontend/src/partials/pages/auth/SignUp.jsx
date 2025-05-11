import React from "react";
// import { useAuth } from "../../../contexts/AuthContext";

const SignUp = () => {
  // try {
  //   const { signUp } = useAuth();
  // } catch {}

  return (
    <div className="card">
      <div className="card-header">
        <h3>Sign Up</h3>
      </div>
      <div className="card-body">
        <form>
          <input placeholder="Email" />
          <input placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
