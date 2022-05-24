import React, { useEffect, useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "./../../../../firebase/firebaseConfig";
import Container from "./style";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const FormJugadores = ({
  usuarios,
  setUsuarios,
  editMode,
  setEditMode,
  editUser,
}) => {
  const [datos, setDatos] = useState({
    nombre: "",
    edad: 0,
    deporte: "jugadoresTenis",
    description: "",
    id: "",
    img: ""
  });

  const [progress, setProgress] = useState(0);
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    let val = event.target.value.split('\\')
    console.log(val[val.length - 1])
  };

  const uploadFile = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(prog);
    },(err)=>console.log(err),
    ()=> {
      console.log(uploadTask.snapshot.ref)
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url => setDatos({...datos, img:uploadTask.snapshot.ref}))
    });
  };

  const enviarDatos = async (event) => {
    event.preventDefault();

    const file = event.target[0].files[0]
    uploadFile(file)
 

    const docRef = await addDoc(collection(db, datos.deporte), datos);
    console.log("Document written with ID: ", docRef.id);
    setUsuarios([datos, ...usuarios]);
  };

  const editarDatos = async (event) => {
    event.preventDefault();
    const washingtonRef = doc(db, datos.deporte, datos.id);
    console.log(datos.id);
    await updateDoc(washingtonRef, datos);
  };

  useEffect(() => {
    console.log(editUser);
    editMode
      ? setDatos(editUser)
      : setDatos({
          nombre: "",
          edad: 0,
          deporte: "jugadoresTenis",
          description: "",
          id: "",
          img:""
        });
  }, [editMode, editUser]);
  /*   db.collection("users").doc(doc.id).update({foo: "bar"}); */

  return (
    <Container onSubmit={editMode ? editarDatos : enviarDatos}>
      <h2> {editMode ? "Editar Jugador" : "Agregar Jugador"}</h2>
      <div>
        <input type="file" onChange={handleInputChange} name="img"/>
      </div>
      <h3>uploaded {progress} %</h3>
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
          <option value="jugadoresTenis">Tenis</option>
          <option value="jugadoresFutbol">Fútbol</option>
        </select>
      </div>
      <div>
        <label>Edad</label>
        <input
          value={datos.edad}
          type="number"
          name="edad"
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
      {editMode && (
        <button onClick={() => setEditMode(false)} className="btn  btn-danger">
          Cancelar
        </button>
      )}
    </Container>
  );
};

export default FormJugadores;
