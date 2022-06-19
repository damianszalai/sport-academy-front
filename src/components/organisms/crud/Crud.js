import React, { useEffect, useState } from "react";
import JugadorCrud from "./JugadorCrud";
import Container from "./style";
import TitileCrud from "./TitileCrud";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import FormJugadores from "../formJugadores/FormJugadores";
import Header from "../../molecules/header/Header";

const Crud = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState();
  const [formVisible, setFormVisible] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [filtroDeporte, setFiltroDeporte] = useState("all");

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datos = await getDocs(collection(db, "jugadores"));
        const usu = datos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setUsuarios(usu);
        console.log(usu);
      } catch (err) {
        console.error(err);
      }
    };
    obtenerDatos();
  }, []);

  const editDoc = (usuario) => {
    setEditMode(true);
    setEditUser(usuario);
  };
  const handlerVisible = () => {
    setFormVisible(false);
  };
  const searchHandler = (e) => {
    setFiltro(e.target.value);
  };
  const handlerChange = (e)=> {
    setFiltroDeporte(e.target.value)
  }
  return (
    <Container>
      {formVisible && (
        <FormJugadores
          handlerVisible={handlerVisible}
          editMode={editMode}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          editUser={editUser}
          setEditMode={setEditMode}
        />
      )}
      <Header title="Lista de Jugadores"></Header>
      <div className="container-fluid">
        <div className="container">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6 btn-container">
                  <select onChange={handlerChange}className="form-select">
                    <option defaultValue="all" 
                    selected disabled>Seleccionar deporte</option>
                    <option value="all">All</option>
                    <option value="tenis">Tenis</option>
                    <option value="futbol">Fútbol</option>
                  </select>
                  <input
                  className="form-control"
                    onChange={searchHandler}
                    type="text"
                    placeholder="search"
                    value={filtro}
                  />
                  <button
                    className="btn btn-success"
                    data-toggle="modal"
                    onClick={() => setFormVisible(!formVisible)}
                  >
                    <i className="bi bi-plus"></i> <span>Add Player</span>
                  </button>
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="bi bi-trash"></i>
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <TitileCrud />
              <tbody>
                {usuarios
                  .filter((usuario) =>
                    usuario.nombre.toLowerCase().includes(filtro.toLowerCase())
                  )
                  .filter((usuario) =>
                    usuario.deporte === filtroDeporte || filtroDeporte === "all" 
                  )
                  .map((usuario) => (
                    <JugadorCrud
                    usuario={usuario}
                    setEditUser={setEditUser}
                    setFormVisible={setFormVisible}
                      setEditMode={setEditMode}
                      nombre={usuario.nombre}
                      edad={usuario.edad}
                      deporte={usuario.deporte}
                      id={usuario.id}
                      description={usuario.description}
                    />
                  ))}
              </tbody>
            </table>
            {/*    <div className="clearfix">
            <div className="hint-text">
              Showing <b>5</b> out of <b>25</b> entries
            </div>
            <ul className="pagination">
              <li className="page-item disabled">
                <a href="#">Previous</a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  5
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link">
                  Next
                </a>
              </li>
            </ul>
          </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Crud;
