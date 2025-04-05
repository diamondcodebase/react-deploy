import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div>
      Contact{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the home page
      </button>
    </div>
  );
}