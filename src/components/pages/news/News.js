import React, { useEffect, useState } from "react";
import Header from "../../UI/molecules/header/Header";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import Post from "./post";
import NewPost from "./NewPost";
import NewCard from "./NewCard";

const News = () => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasFutbol, setNoticiasFutbol] = useState([]);
  const [noticiasTenis, setNoticiasTenis] = useState([]);
  const [form, setForm] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const todas = query(
          collection(db, "noticias"),
          where("activa", "==", true)
        );
        const tenis = query(
          collection(db, "noticias"),
          where("categoria", "==", "tenis"),
          where("activa", "==", true)
        );
        const futbol = query(
          collection(db, "noticias"),
          where("categoria", "==", "futbol"),
          where("activa", "==", true)
        );

        const datosTodas = await getDocs(todas);
        const usu = datosTodas.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const datosTenis = await getDocs(tenis);
        const usuTenis = datosTenis.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const datosFutbol = await getDocs(futbol);
        const usuFutbol = datosFutbol.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setNoticias(usu);
        setNoticiasTenis(usuTenis);
        setNoticiasFutbol(usuFutbol);

        console.log(usu);
      } catch (err) {
        console.error(err);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <>
      <Header title="Noticias"></Header>
      <div>{form && <NewPost />}</div>
      <Post className="container-fluid">
        <button onClick={() => setForm(!form)} className="btn btn-primary">
          Nueva Noticias
        </button>

        <div className="container">
          <h2>Todas las noticias</h2>
          <div>
            {noticias.map((noticia, i) => (
              <NewCard
                categoria={noticia.categoria}
                key={i}
                titulo={noticia.titulo}
                date={noticia.date}
                desc={noticia.desc}
              />
            ))}
          </div>
        </div>
      </Post>
      <Post className="container-fluid">
        <div className="container">
          <h2>Noticias de Fútbol</h2>
          <div>
            {noticiasFutbol.map((noticia, i) => (
              <NewCard
                categoria={noticia.categoria}
                key={i}
                titulo={noticia.titulo}
                date={noticia.date}
                desc={noticia.desc}
              />
            ))}
          </div>
        </div>
      </Post>
      <Post className="container-fluid">
        <div className="container">
          <h2>Noticias de Tenis</h2>
          <div>
            {noticiasTenis.map((noticia, i) => (
              <NewCard
                categoria={noticia.categoria}
                key={i}
                titulo={noticia.titulo}
                date={noticia.date}
                desc={noticia.desc}
              />
            ))}
          </div>
        </div>
      </Post>
    </>
  );
};

export default News;
