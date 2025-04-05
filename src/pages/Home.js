import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      HOME PAGE
      <Link to="/about"> GO TO THE ABOUT PAGE </Link>
    </div>
  );
}