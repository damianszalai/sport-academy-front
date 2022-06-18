import React from "react";
import Container from "./style";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/molecules/header/Header";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "dami",
    email: "damiszalai@gmail.com",
    password: "123456",
    repeatPassword: "123456",
  });

  const { name, email, password, repeatPassword } = formValues;

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(name, email, password, repeatPassword);

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
      console.log("Formulario correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("El nombre es requerido."));

      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("El Email no es valido."));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("La clave debe tener por lo menos 6 caracteres."));
      return false;
    } else if (password !== repeatPassword) {
      dispatch(setError("Las claves no son iguales"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <Header title="Registrar"></Header>
      <Container className="container" onSubmit={handleRegister}>
        {msgError && (
          <div className="alert alert-danger" role="alert">
            {msgError}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            className="form-control"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="form-control"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="repeatPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="repeatPassword"
            className="form-control"
            value={repeatPassword}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn btn-primary btn-outline">Registrar</button>
        <Link to="/login">Already registred?</Link>
      </Container>
    </>
  );
};

export default RegisterScreen;
