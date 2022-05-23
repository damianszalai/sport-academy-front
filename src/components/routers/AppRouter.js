import React /* , { useReducer, useEffect } */ from "react";
import { BrowserRouter } from "react-router-dom";
/* import { AuthContext } from "../../auth/authContext";
import { authReducer } from "../../auth/authReducer"; */
import Footer from "../UI/organisms/footer/Footer";
import { Navbar } from "../UI/organisms/navBar/NavBar";
import TopHeader from "../UI/organisms/topHeader/TopHeader";
import AnimatedRoute from "./AnimatedRoute";
import { Provider } from "react-redux";
import { store } from "./../../store/store";

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
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default AppRouter;
