import React from "react";
import Container from "./style";

const FormTextArea = ({ label, name, value, onChange }) => {
  return (
    <Container>
      <label>{label}</label>
      <textarea name={name} value={value} onChange={onChange} />
    </Container>
  );
};

export default FormTextArea;
