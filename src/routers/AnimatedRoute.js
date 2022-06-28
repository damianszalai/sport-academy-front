import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AcademiaFutbol from "../pages/academiaFutbol/AcademiaFutbol";
import AcademiaTennis from "../pages/academiaTennis/AcademiaTennis";
import BecasDeportivas from "../pages/becasDeportivas/BecasDeportivas";
import ColegioOlimpo from "../pages/colegioOlimpo/ColegioOlimpo";
import GrupoProyeccion from "../pages/academiaTennis/grupoProyeccion/GrupoProyeccion";
import GrupoJunior from "../pages/academiaTennis/grupoJunior/GrupoJunior";
import Home from "../pages/home/Home";
import { AnimatePresence } from "framer-motion";
import JugadoresFutbol from "../pages/jugadoresFutbol/JugadoresFutbol";
import JugadoresTenis from "../pages/jugadoresTenis/JugadoresTenis";
import LoginScreen from "../pages/loginScreen/LoginScreen";
import RegisterScreen from "../pages/loginScreen/RegisterScreen";
import NewPostForm from "../pages/news/NewPostForm";
import PostGeneral from "../pages/news/new/Post";
import News from "../pages/news/News";
import Contacto from "../pages/contacto/Contacto";
import Crud from "../components/organisms/crud/Crud";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/academia-futbol" element={<AcademiaFutbol />} />
        <Route path="/academia-tenis" element={<AcademiaTennis />} />
        <Route path="/becas-deportivas-usa" element={<BecasDeportivas />} />
        <Route path="/colegio-olimpo" element={<ColegioOlimpo />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/newpost" element={<NewPostForm/>} />
        <Route path="/noticias" element={<News/>} />
        <Route path="/noticias/:id" element={<PostGeneral/>} />
        <Route path="/crud" element={<Crud deportes="jugadoresFutbol"/>} />

        <Route
          path="/academia-tennis/grupo-proyeccgion"
          element={<GrupoProyeccion />}
        />
        <Route
          path="/academia-tennis/grupo-junior-elite"
          element={<GrupoJunior />}
        />
        <Route
          path="/jugadores/futbol"
          element={<JugadoresFutbol />}
        />
        <Route
          path="/jugadores/tenis"
          element={<JugadoresTenis/>}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
