import React from "react";
/* import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../auth/authContext";
import { types } from "../../../../types/types"; */
import Container from "./style";
import { useDispatch } from "react-redux";
import Header from "../../UI/molecules/header/Header";
import { useForm } from "../../../hooks/useForm";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "damiszalai@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <>
      <Header title="Ingresar con Google"></Header>
      <Container className="container" onSubmit={handleLogin}>
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
        {/*     <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button className="btn btn-primary btn-outline">Login</button>
      </Container>
      <button className="btn btn-primary btn-outline" onClick={handleGoogleLogin}>
      <i className="bi bi-google"></i>   Sign In with Google
      </button>
    </>
  );
};

export default LoginScreen;
