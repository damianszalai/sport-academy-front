import React, { useEffect, useState } from "react";
import Header from "../../UI/molecules/header/Header";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import { motion } from "framer-motion";
import Post from "./post";
import NewPost from "./NewPost";

const News = () => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasFutbol, setNoticiasFutbol] = useState([])
  const [noticiasTenis, setNoticiasTenis] = useState([])
  const [form, setForm] = useState(false)

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
        const usu = datosTodas.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        const datosTenis = await getDocs(tenis);
        const usuTenis = datosTenis.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        const datosFutbol = await getDocs(futbol);
        const usuFutbol = datosFutbol.docs.map((doc) => ({ ...doc.data(), id: doc.id }));


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
/*   const handlerWhere = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const q = query(
      collection(db, "noticias"),
      where("categoria", "==", event.target.value),
      where("activa", "==", true)
    );

    const querySnapshot = await getDocs(q);

    const usu = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setNoticias(usu);
  }; */
  return (
    <>
      <Header title="Noticias"></Header>
      <div>
          {form && <NewPost/>}
      </div>
      <Post className="container-fluid">
<button onClick={()=> setForm(!form)} className="btn btn-primary">Nueva Noticias</button>

        <div className="container">
          <h2>Todas las noticias</h2>
          <div>
          {noticias.map((noticia, i) => (
            <motion.article
              key={i}
              initial={{ transform: "scale(0)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
            >
              <div></div>
              <div>
                <h2>{noticia.titulo}</h2>
                <p className="date">{noticia.date}</p>
                <p className="category">{noticia.categoria}</p>
                <p className="desc">{noticia.desc}</p>
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </Post>
      <Post className="container-fluid">
        <div className="container">
      <h2>Noticias de Fútbol</h2>
      <div>
          {noticiasFutbol.map((noticia, i) => (
            <motion.article
              key={i}
              initial={{ transform: "scale(0)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
            >
              <div></div>
              <div>
                <h2>{noticia.titulo}</h2>
                <p className="date">{noticia.date}</p>
                <p className="category">{noticia.categoria}</p>
                <p className="desc">{noticia.desc}</p>
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </Post>
      <Post className="container-fluid">
        <div className="container">
          <h2>Noticias de Tenis</h2>
          <div>
          {noticiasTenis.map((noticia, i) => (
            <motion.article
              key={i}
              initial={{ transform: "scale(0)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
            >
              <div></div>
              <div>
                <h2>{noticia.titulo}</h2>
                <p className="date">{noticia.date}</p>
                <p className="category">{noticia.categoria}</p>
                <p className="desc">{noticia.desc}</p>
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </Post>
    </>
  );
};

export default News;
