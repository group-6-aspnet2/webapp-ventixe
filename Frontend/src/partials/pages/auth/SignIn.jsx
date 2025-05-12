import React from "react";
// import { useAuth } from '../../../contexts/AuthContext'

const SignIn = () => {
  // try {
  //   const { signIn } = useAuth()
  // }
  // catch { }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Sign In</h3>
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

export default SignIn;
