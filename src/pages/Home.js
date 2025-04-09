import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <div>
        <Link to="/about"> About </Link>
        <Link to="/biblequiz"> Bible OX </Link>
        <Link to="/canadaquiz"> Canada OX </Link>
        <Link to="/hongkongquiz"> Hong Kong OX </Link>
      </div>
      
    </div>
  );
}