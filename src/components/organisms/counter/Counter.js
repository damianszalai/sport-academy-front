import React from "react";
import Container from "./style";
import Column from "../../ui/Column";
import AnimatedNumber from "animated-number-react";

const Counter = () => {
  const formatValue = (value) => `${Number(value).toFixed(0)}`;
  return (
    <Container>
      <Column columns="4" className="container">
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
            deportistas preparándose para obtener una beca deportiva en USA
          </span>
        </div>
      </Column>
    </Container>
  );
};

export default Counter;
