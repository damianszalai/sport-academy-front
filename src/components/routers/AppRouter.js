import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../UI/organisms/footer/Footer";
import { Navbar } from "../UI/organisms/navBar/NavBar";
import TopHeader from "../UI/organisms/topHeader/TopHeader";
import AnimatedRoute from "./AnimatedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <AnimatedRoute />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
