import React /* , { useReducer, useEffect } */ from "react";
import { BrowserRouter } from "react-router-dom";
/* import { AuthContext } from "../../auth/authContext";
import { authReducer } from "../../auth/authReducer"; */
import Footer from "../components/organisms/footer/Footer";
import { Navbar } from "../components/organisms/navBar/NavBar";
import TopHeader from "../components/organisms/topHeader/TopHeader";
import AnimatedRoute from "./AnimatedRoute";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Whatsapp from "../components/atoms/wp/Whatsapp";

/* const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
}; */

const AppRouter = () => {
  /*   const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if(!user) return;
    
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]); */

  return (
    <Provider 
    store={store}>
      <BrowserRouter>
        <div>
          <TopHeader />
          <Navbar />
        </div>
        <AnimatedRoute />
        <Whatsapp/>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
