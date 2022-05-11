import React from "react";
import Container from "./style";

const FormSelect = ({ options = [],name, label, onChange }) => {
  return (
    <Container>
      <label>{label}</label>
      <select name={name} onChange={onChange}>
      {options.map((option, i) => <option key={i} value={option.value}>{option.name}</option>)}  
      </select> 
    </Container>
  );
};

export default FormSelect;
