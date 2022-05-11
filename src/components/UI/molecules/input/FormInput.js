import React from "react";
import Container from "./style";

const FormInput = ({ label, type, name, value, onChange }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </Container>
  );
};

export default FormInput;
