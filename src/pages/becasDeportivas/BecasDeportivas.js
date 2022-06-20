import React from "react";
import Description from "../../components/molecules/description/Description";
import Header from "../../components/molecules/header/Header";
import Metodologias from "../../components/molecules/metodologias/Metodologias";
import Cards from "../../components/organisms/cards/Cards";
import Form from "../../components/organisms/form/Form";
import Container from "./style";

const BecasDeportivas = () => {
  const metodologiasList = [
    {
      title: "Metodologias",
      body: (
        <p>
          Nos basamos en tres pilares claves para el desarrollo integral del
          deportista y la obtención de la beca.
        </p>
      ),
    },
    {
      title: "1. COACHING:",
      body: (
        <p>
          Para los deportistas de hoy es fundamental contar con el apoyo
          necesario para lograr sus metas. Así, utilizando Coaching Ontológico,
          se le entregará herramientas que le serán útiles para afrontar las
          diferentes pruebas que encontrarán en su nueva vida.
          <br />
          Los temas a trabajar son:
          <ul>
            <li>Disciplina Deportiva y Académica</li>
            <li>Orientación en el área de estudios</li>
            <li>Motivación and Perseverancia</li>
            <li>Vivir en USA</li>
            <li>Psicología deportiva</li>
          </ul>
        </p>
      ),
    },
    {
      title: "2. PREPARACIÓN ACADÉMICA:",
      body: (
        <p>
          Es fundamental la parte académica para poder optar por una buena beca
          deportiva. Específicamente se debe trabajar el área de matemáticas y
          el de Ingles, para rendir las pruebas SAT y TOEFL, es por esto que
          ponemos a disposición a profesores con más de 5 años de experiencia en
          la preparación de estas pruebas. Contamos con clases particulares,
          semi particulares y grupales diseñadas según el nivel de cada alumno.
        </p>
      ),
    },
  ];

  return (
      <Container>
        <Header title="Becas Deportivas" />
        <Cards>
          <iframe
            width="510"
            height="287"
            src="https://www.youtube.com/embed/AsvKQSmZ9Cc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="510"
            height="287"
            src="https://www.youtube.com/embed/zRfONRjrP28"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Cards>
        <Description />

        <Metodologias metodologiasList={metodologiasList} />

        <section className="container-fluir">
          <div className="container">
            <Form />
          </div>
        </section>
      </Container>
  );
};

export default BecasDeportivas;
