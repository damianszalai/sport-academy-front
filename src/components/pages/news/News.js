import React, { useEffect, useState } from "react";
import Header from "../../UI/molecules/header/Header";
import { query, where, collection, getDocs, limit } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import NewPostForm from "./NewPostForm";
import NewCard from "./NewCard";
import StylePost from "./stylePost";
import PlaceHolder from "./PlaceHolder";

const News = () => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasFutbol, setNoticiasFutbol] = useState([]);
  const [noticiasTenis, setNoticiasTenis] = useState([]);
  const [noticiasNoticias, setNoticiasNoticias] = useState([]);
  const [form, setForm] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const todas = query(
          collection(db, "noticias"),
          where("activa", "==", true),
          limit(6)
        );
        const tenis = query(
          collection(db, "noticias"),
          where("categoria", "==", "tenis"),
          where("activa", "==", true),
          limit(6)
        );
        const futbol = query(
          collection(db, "noticias"),
          where("categoria", "==", "futbol"),
          where("activa", "==", true),
          limit(6)
        );
        const noti = query(
          collection(db, "noticias"),
          where("categoria", "==", "noticia"),
          where("activa", "==", true),
          limit(6)
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

        const datosNoticias = await getDocs(noti);
        const usuNoticias = datosNoticias.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setNoticias(usu);
        setNoticiasTenis(usuTenis);
        setNoticiasFutbol(usuFutbol);
        setNoticiasNoticias(usuNoticias);

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
    
        {form && (
          <NewPostForm className="fijo"
          
          />
        )}
      
      <StylePost className="container-fluid">
        <button
          onClick={() => setForm(!form)}
          className={form ? "btn btn-primary cancel" : "btn btn-primary"}
        >
          <i class="bi bi-plus-lg"></i>
        </button>

        <div className="container">
          <h2>Todas las noticias</h2>
          <div>
            {noticias.length !== 0 ? noticias.map((noticia, i) => (
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
            )) : <PlaceHolder/> }
            {noticias.length > 5 && <button>+</button>}
          </div>

          {noticias.length > 5 && (
            <button className="btn btn-outline">Ver todas</button>
          )}
        </div>
      </StylePost>
      <StylePost className="container-fluid">
        <div className="container">
          <h2>Noticias de Fútbol</h2>
          <div>
            {noticiasFutbol.length !== 0 ? noticiasFutbol.map((noticia, i) => (
              <NewCard
                img={noticia.img}
                id={noticia.id}
                categoria={noticia.categoria}
                key={i}
                titulo={noticia.titulo}
                date={noticia.date}
                desc={noticia.desc}
              />
            )): <PlaceHolder/> }
          </div>
          {noticiasFutbol.length > 5 && (
            <button className="btn btn-outline">Ver todas</button>
          )}
        </div>
      </StylePost>
      <StylePost className="container-fluid">
        <div className="container">
          <h2>Noticias de Tenis</h2>
          <div>
            {noticiasTenis.length !== 0 ? noticiasTenis.map((noticia, i) => (
              <NewCard
                img={noticia.img}
                id={noticia.id}
                categoria={noticia.categoria}
                key={i}
                titulo={noticia.titulo}
                date={noticia.date}
                desc={noticia.desc}
              />
            )): <PlaceHolder/> }
          </div>
          {noticiasTenis.length > 5 && (
            <button className="btn btn-outline">Ver todas</button>
          )}
        </div>
      </StylePost>
      <StylePost className="container-fluid">
        <div className="container">
          <h2>Noticias</h2>
          <div>
            {noticiasNoticias.length !== 0 ? noticiasNoticias.map((noticia, i) => (
              <NewCard
                img={noticia.img}
                id={noticia.id}
                categoria={noticia.categoria}
                key={i}
                titulo={noticia.titulo}
                date={noticia.date}
                desc={noticia.desc}
              />
            )): <PlaceHolder/> }
          </div>
          {noticiasNoticias.length > 5 && (
            <button className="btn btn-outline">Ver todas</button>
          )}
        </div>
      </StylePost>
    </>
  );
};

export default News;
