import React, { useState } from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
