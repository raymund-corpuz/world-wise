import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <div>
      <PageNav />
      <h1>World Wise</h1>

      <NavLink to="app">Go to the App</NavLink>
    </div>
  );
};

export default Homepage;
