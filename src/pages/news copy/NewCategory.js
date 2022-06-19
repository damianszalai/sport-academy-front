import React, { useState, useEffect } from "react";
import { query, where, collection, getDocs, limit } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import NewCard from "./NewCard";
import StylePost from "./stylePost";
import PlaceHolder from "./PlaceHolder";

const NewCategory = ({ title, categoria, subCategoria = false }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        let todas;
        if (subCategoria) {
          todas = query(
            collection(db, categoria),
            where("categoria", "==", subCategoria),
            where("activa", "==", true),
            limit(6)
          );
        } else {
          todas = query(
            collection(db, categoria),
            where("activa", "==", true),
            limit(6)
          );
        }
        const datosTodas = await getDocs(todas);
        const usu = datosTodas.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setNoticias(usu);
      } catch (err) {
        console.error(err);
      }
    };
    obtenerDatos();
  }, []);
  return (
    <StylePost className="container-fluid">
      <div className="container">
        <h2>{title}</h2>
        <div>
          {noticias.length !== 0 ? (
            noticias.map((noticia, i) => (
              <NewCard
                img={noticia.img}
                id={noticia.id}
                num={i}
                categoria={noticia.categoria}
                key={i}
                titulo={noticia.titulo}
                date={noticia.date}
                desc={noticia.desc}
              />
            ))
          ) : (
            <PlaceHolder />
          )}
          {noticias.length > 5 && <button>+</button>}
        </div>

        {noticias.length > 5 && (
          <button className="btn btn-outline">Ver todas</button>
        )}
      </div>
    </StylePost>
  );
};

export default NewCategory;
