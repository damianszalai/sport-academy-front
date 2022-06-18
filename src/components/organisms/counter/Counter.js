import React from "react";
import Container from "./style";
import AnimatedNumber from "animated-number-react";

const Counter = () => {
  const formatValue = (value) => `${Number(value).toFixed(0)}`;
  return (
    <Container>
      <div className="container">
        <div>
          <AnimatedNumber
            value={180}
            formatValue={formatValue}
            duration={300}
          />

          <span> deportistas en nuestras academias</span>
        </div>
        <div>
          <AnimatedNumber
            value={170}
            formatValue={formatValue}
            duration={300}
          />
          <span> deportistas estudiando en Estados Unidos</span>
        </div>
        <div>
          <AnimatedNumber
            value={120}
            formatValue={formatValue}
            duration={300}
          />
          <span> deportistas en nuestro Colegio</span>
        </div>
        <div>
          <AnimatedNumber value={40} formatValue={formatValue} duration={300} />
          <span>
            deportistas preparándose para obtener una beca deportiva en Estados
            Unidos
          </span>
        </div>
      </div>
      <div>
        <iframe
          /* width="560" */
          height="315"
          src="https://www.youtube.com/embed/V6iLWQB6hT8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Counter;
