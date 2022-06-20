import React from "react";
import Header from "../../components/molecules/header/Header";
import Container from "./style";
import { motion } from "framer-motion";
import { colOlimpo } from "../../assets";

const ColegioOlimpo = () => {
  return (
    <div>
      <Container>
        <Header title="Colegio Olimpo" />
        <article className="row align-items-center container">
          <motion.p
            className="col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Generamos una alianza estratégica con el Colegio Olimpo para poder
            darles a todos los deportistas de Sport Academy la posibilidad de
            tener una educación de calidad y tener la disponibilidad de vivir el
            deporte de alto rendimiento.
            <br />
            Mediante un trabajo en conjunto, se logra llevar a la par el
            entrenamiento con los estudios, utilizando como referencia el modelo
            americano, donde se busca la excelencia deportiva y académica,
            teniendo como base la distribución eficiente de los tiempos.
            <br />
            Contamos con un gran número de deportistas de Sport Academy que
            estudian en el Colegio Olimpo, desarrollándose de forma integral en
            lo académico y lo deportivo.
            <br />
            Lo que distingue a esta institución educacional es que se define
            como colegio para deportistas, por lo que cuenta con la disposición
            de tiempos de estudios distinta a la tradicional, dándole mayor
            flexibilidad a los deportistas para que puedan optimizar sus tiempos
            de estudio y entrenamientos.
            <span>CONOCE MÁS SOBRE LA PROPUESTA DEL COLEGIO OLIMPO <a href="http://colegio-olimpo.cl/">AQUÍ.</a></span>
          </motion.p>
          <motion.figure
            className="col"
            initial={{ transform: 'translateX(-100px)', opacity:0 }}
            animate={{ transform: 'translateX(0px)',opacity:1  }}
            transition={{ duration: 1, delay: .4, ease:"easeOut" }}
          >
            <img src={colOlimpo} alt="" />
          </motion.figure>
        </article>
      </Container>
    </div>
  );
};

export default ColegioOlimpo;
