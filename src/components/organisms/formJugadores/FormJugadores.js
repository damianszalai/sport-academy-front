import React, { useEffect, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "./../../../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Container from "./style";
import toast, { Toaster } from "react-hot-toast";
import { Colors } from "../../../styles/colors";

const FormJugadores = ({
  usuarios,
  setUsuarios,
  editMode,
  setEditMode,
  editUser,
  handlerVisible,
}) => {
  const [datos, setDatos] = useState({
    nombre: "",
    edad: 0,
    deporte: "tenis",
    description: "",
    id: "",
    img: "",
  });

  const [progress, setProgress] = useState(0);
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputChangeFile = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.files[0].name,
    });
  };

  const handlerClear = (event) => {
    event.preventDefault();
    /* event.target[0].files[0]  = "" */
    console.log(event.target);
    setDatos({
      nombre: "",
      edad: "",
      deporte: "tenis",
      description: "",
      id: "",
      img: "",
    });
    setProgress(0);
  };

  const uploadFile = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
        { prog == 100 &&  toast.success("Jugador Agregado", {
          style: {
            padding: '4px 16px',
            background: '#28a745',
            color: Colors.white,
            borderRadius: '4px'
          },
          iconTheme: {
            primary: '#28a745',
            secondary: Colors.white,
          },
        })}
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setDatos({ ...datos, img: url });
        });
      }
    );
  };

  const enviarDatos = async (event) => {
    event.preventDefault();
    const file = event.target[0].files[0];
    uploadFile(file);
    const docRef = await addDoc(collection(db, "jugadores"), datos);
    console.log("Document written with ID: ", docRef.id);
    setUsuarios([datos, ...usuarios]);
 
  };

  const editarDatos = async (event) => {
    event.preventDefault();
    const washingtonRef = doc(db, "jugadores", datos.id);
    console.log(datos.id);
    await updateDoc(washingtonRef, datos);
    toast.success("Jugador Actualizado", {
      style: {
        padding: '4px 16px',
        background: '#28a745',
        color: Colors.white,
        borderRadius: '4px'
      },
      iconTheme: {
        primary: '#28a745',
        secondary: Colors.white,
      },
    });
  };

  useEffect(() => {
    console.log(editUser);
    editMode
      ? setDatos(editUser)
      : setDatos({
          nombre: "",
          edad: "",
          deporte: "tenis",
          description: "",
          id: "",
          img: "",
        });
  }, [editMode, editUser]);

  /*   db.collection("users").doc(doc.id).update({foo: "bar"}); */

  return (
    <Container
      onSubmit={editMode ? editarDatos : enviarDatos}
      onClick={(e) => {
      console.log(e.target.className === "bi bi-x");
      console.log(e.target.className);
        (e.target.nodeName === "FORM" || e.target.className === "bi bi-x") &&
          handlerVisible();
      }}
    >
      <div className="form-container">
        <span className="close">
          <i className="bi bi-x"></i>
        </span>
        <h2> {editMode ? "Editar Jugador" : "Agregar Jugador"}</h2>
        <div>
          <input
            className="form-control"
            type="file"
            onChange={handleInputChangeFile}
            name="img"
          />
        </div>
        <h3>uploaded {progress} %</h3>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${progress}%` }}
          >
            {progress} %
          </div>
        </div>

        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={datos.nombre}
            onChange={handleInputChange}
            name="nombre"
          ></input>
        </div>
        <div>
          <label>Deporte</label>

          <select
            value={datos.deporte}
            onChange={handleInputChange}
            name="deporte"
          >
            <option value="tenis">Tenis</option>
            <option value="futbol">Fútbol</option>
          </select>
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            name="edad"
            value={datos.edad}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label>Comentarios</label>
          <textarea
            value={datos.description}
            onChange={handleInputChange}
            name="description"
          ></textarea>
        </div>
        <button className="btn">{editMode ? "Editar" : "Cargar"}</button>
        <button className="btn btn-secondary" onClick={(e) => handlerClear(e)}>
          Reset
        </button>
        {editMode && (
          <button
            onClick={() => setEditMode(false)}
            className="btn  btn-danger"
          >
            Cancelar
          </button>
        )}
      </div>
      <Toaster position="bottom-left" />
    </Container>
  );
};

export default FormJugadores;
