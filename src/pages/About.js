import React from "react";
import { Navigate } from "react-router-dom";

export default function About() {
    const [goToContact, setGoToContact] = React.useState(false);

    if (goToContact) {
      return <Navigate to="/contact" />;
    }
  
    return (
      <div>
        About
        <button
          onClick={() => {
            setGoToContact(true);
          }}
        >
          {" "}
          Go to the contact page
        </button>
      </div>
    );
}