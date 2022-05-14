import React from "react";
import Description from "../../../UI/molecules/description/Description";
import Header from "../../../UI/molecules/header/Header";
import Metodologias from "../../../UI/molecules/metodologias/Metodologias";
import SubHeader from "../../../UI/molecules/subheader/SubHeader";
import Cards from "../../../UI/organisms/cards/Cards";
import Form from "../../../UI/organisms/form/Form";
import Container from "./style";

const GrupoJunior = () => {
  const metodologiasList = [
    {
      title: "METODOLOGÍA DE TRABAJO:",
      body: (
        <p>
          La planificación está orientada a la alta competencia, dando énfasis
          en la técnica, táctica y las capacidades físicas, sumado a la variable
          psicológica a nivel grupal y personal. Además, todos estos trabajos de
          mejoras van de la mano con ejercicios orientados a la aplicación en la
          realidad de juego.
        </p>
      ),
    },
    {
      title: "HERRAMIENTAS PARA POTENCIAR A NUESTROS JUGADORES:",
      body: (
        <p>
          <ul>
            <li>
              Evaluaciones semestrales de cada jugador en el área técnica,
              táctica, física y psicológica.
            </li>
            <li>
              Convenio con Clínica MEDS para exámenes y rehabilitación física.
            </li>
            <li>Análisis de videos tenísticos.</li>
            <li>
              Entrevistas personales con psicólogo deportivo de la academia.
            </li>
            <li>
              Informes de asistencia mensual y seguimiento del rendimiento
              semestral de cada jugador.
            </li>
          </ul>
        </p>
      ),
    },
  ];
  return (
    <div>
      <Container>
        <Header title="GRUPO JUNIOR ELITE" />
        <SubHeader title="Objetivos" />
        <section className="videos">
          <iframe
            width="510"
            height="287"
            src="https://www.youtube.com/embed/UZW1ET-apOc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
        <Description />
        <Metodologias metodologiasList={metodologiasList}></Metodologias>

        <section className="container-fluir">
          <div className="container">
            <Form />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default GrupoJunior;
