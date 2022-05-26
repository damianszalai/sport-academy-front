import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import Header from "../../UI/molecules/header/Header";
import StylePostGeneral from "./stylePostGeneral";
import ImagePost from "./ImagePost";

const PostGeneral = () => {
  const [datos, setDatos] = useState({
    activa: true,
    autor: "",
    categoria: "",
    date: "",
    desc: "",
    id: "",
    img: "",
    titulo: "",
  });
  const param = useParams();
  useEffect(() => {
    const obtenerDatos = async () => {
      const docRef = doc(db, "noticias", param.id);
      const docSnap = await getDoc(docRef);
      try {
        setDatos(docSnap.data());
        console.log(datos);
      } catch (err) {
        console.log(err);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <StylePostGeneral>
      <Header title={datos.categoria} />
      <div className="container">
        <p className="date">{datos.date}</p>
        <p className="categoria">{datos.categoria}</p>
      {/*   <figure>
          <img src={datos.img} alt="placeholder" />
        </figure> */}

        <ImagePost urlImagen={datos.img} />
        
        <h2>{datos.titulo}</h2>
        <p className="desc">{datos.desc}</p>
        <p>Escrito por: {datos.autor}</p>
      </div>
    </StylePostGeneral>
  );
};

export default PostGeneral;
