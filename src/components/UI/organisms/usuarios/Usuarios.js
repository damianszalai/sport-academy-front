import React, { /* useContext, */ useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "./../../../../firebase/firebaseConfig";
import Container from "./style";
import FormJugadores from "../formJugadores/FormJugadores";
import { motion } from "framer-motion";
import ImageUser from "./ImageUser";
/* import { AuthContext } from "../../../../auth/authContext"; */

const Usuarios = ({ deportes }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState();

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getDocs(collection(db, deportes));
      const usu = datos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setUsuarios(usu);
      console.log(usu);
    };
    obtenerDatos();
  }, []);

  const removeDoc = async (deporte, id) => {
    const userFilter = usuarios.filter((user) => user.id !== id);

    setUsuarios(userFilter);
    await deleteDoc(doc(db, deporte, id));
  };

  const editDoc = (usuario) => {
    setEditMode(true);
    setEditUser(usuario);
  };

  /*   const { user } = useContext(AuthContext); */

  return (
    <Container className="container">
      <h1>Usuarios</h1>
      <FormJugadores
        editMode={editMode}
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        editUser={editUser}
        setEditMode={setEditMode}
      />
      <ul>
        {usuarios.map((usuario) => (
          <motion.li
            key={usuario.id}
            initial={{ transform: "scale(0)", opacity: 0 }}
            animate={{ transform: "scale(1)", opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
          >
            <div className="edit">
              <button onClick={() => removeDoc(deportes, usuario.id)}>
                <i className="bi bi-trash"></i>
              </button>
              <button onClick={() => editDoc(usuario)}>
                <i className="bi bi-pencil"></i>
              </button>
            </div>
            <ImageUser urlImagen={usuario.img} />
            <h2>{usuario.nombre}</h2>
            <p>{usuario.edad}</p>
            <p>{usuario.deporte}</p>
            <p>{usuario.description}</p>
          </motion.li>
        ))}
      </ul>
    </Container>
  );
};

export default Usuarios;
