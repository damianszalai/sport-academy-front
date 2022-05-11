import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AcademiaFutbol from "../pages/academiaFutbol/AcademiaFutbol";
import AcademiaTennis from "../pages/academiaTennis/AcademiaTennis";
import BecasDeportivas from "../pages/becasDeportivas/BecasDeportivas";
import ColegioOlimpo from "../pages/colegioOlimpo/ColegioOlimpo";
import GrupoProyeccion from "../pages/grupoProyeccion/GrupoProyeccion";
import Home from "../pages/home/Home";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/academia-futbol" element={<AcademiaFutbol />} />
        <Route path="/academia-tennis" element={<AcademiaTennis />} />
        <Route path="/becas-deportivas-usa" element={<BecasDeportivas />} />
        <Route path="/colegio-olimpo" element={<ColegioOlimpo />} />
        <Route
          path="/academia-tennis/grupo-proyeccion"
          element={<GrupoProyeccion />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
