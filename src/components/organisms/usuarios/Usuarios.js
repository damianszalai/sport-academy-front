import React, { useEffect, useState } from "react";
import {
  query,
  where,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import { Container } from "./style";
import { motion } from "framer-motion";
import ImageUser from "./ImageUser";

const Usuarios = ({ deportes }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState();

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        let todas;
        todas = query(
          collection(db, "jugadores"),
          where("deporte", "==", deportes)
        );

        const datos = await getDocs(todas);

        const usu = datos.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setUsuarios(usu);
      } catch (err) {
        console.error(err);
      }
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
            <div>
              <h2>{usuario.nombre}</h2>
              {/*   <p>{usuario.edad}</p> */}
              <p>{usuario.deporte}</p>
              {/*     <p>{usuario.description}</p> */}
            </div>
          </motion.li>
        ))}
      </ul>
    </Container>
  );
};

export default Usuarios;
