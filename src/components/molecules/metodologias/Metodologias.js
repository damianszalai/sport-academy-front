import React from "react";
import Metodologia from "../../atoms/Metodologia";
import Container from "./style";

const Metodologias = ({metodologiasList = []}) => {
  return (
    <Container cantidad={metodologiasList.length}>
      <div className="container">

          {metodologiasList.map((meto,i)=> 
          <Metodologia aa={i} key={i} title={meto.title}>
              {meto.body}
          </Metodologia>)}
      </div>
    </Container>
  );
};

export default Metodologias;
