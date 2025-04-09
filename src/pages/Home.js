import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      HOME PAGE
      <Link to="/biblequiz"> GO TO THE BIBLE QUIZ PAGE </Link>
    </div>
  );
}