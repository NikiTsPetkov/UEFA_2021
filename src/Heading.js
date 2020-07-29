import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <header>
      <Link to="/">
        <img
          src="/assets/logo.png"
          alt="UEFA 2020 logo"
          height="200"
          width="220"
        />
      </Link>
    </header>
  );
};

export default Heading;
