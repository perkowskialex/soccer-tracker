import React from "react";
import "./GoogleCustomButton.css";
import { googleSignIn, googleSignOut } from "../../firebase/auth";

export const GoogleCustomButton = () => {
  return (
    <div>
      <button className="google-button" onClick={() => googleSignIn}>
        Google Sign In
      </button>
    </div>
  );
};
