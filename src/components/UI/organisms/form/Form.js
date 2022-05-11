import React, { useState } from "react";
import FormInput from "../../molecules/input/FormInput";
import FormSelect from "../../molecules/input/FormSelect";
import FormTextArea from "../../molecules/input/FormTextarea";
import Container from "./style";

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const options = [
    {
      value: "Deporte que practica",
      name: "Deporte que practica",
    },
    {
      value: "Tenis",
      name: "Tenis",
    },
    {
      value: "fútbol",
      name: "fútbol",
    },
    {
      value: "Otro deporte",
      name: "Otro deporte",
    },
    {
      value: "Colegio Olimpo",
      name: "Colegio Olimpo",
    },
  ];
  return (
    <Container onSubmit={handleSubmit}>
      <h2>Postulate!</h2>
      <FormInput
        label="Nombre Y Apellido"
        type="text"
        name="nombre"
        value={inputs.nombre || ""}
        onChange={handleChange}
      ></FormInput>
      <FormInput
        label="Telefono"
        type="tel"
        name="telefono"
        value={inputs.telefono || ""}
        onChange={handleChange}
      ></FormInput>
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
      ></FormInput>
      <FormInput
        label="Edad del Juador"
        type="number"
        name="edad"
        value={inputs.edad || ""}
        onChange={handleChange}
      ></FormInput>
      <FormSelect  name="deporte" label="Tu Vieja" onChange={handleChange} options={options} />
      <FormTextArea name="comentarios" label="Comentarios" onChange={handleChange}/>
      <input type="submit" className="btn btn-primary"/>
    </Container>
  );
};

export default Form;
