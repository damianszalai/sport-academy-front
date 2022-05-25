import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../../firebase/firebaseConfig";
import Container from "./style";
import SubHeader from "../../UI/molecules/subheader/SubHeader";

const NewPost = () => {
  const returnDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  };

  const [msgError, setMsgError] = useState(false);

  const [post, setPost] = useState({
    titulo: "",
    desc: "",
    categoria: "",
    id: "",
    img: "",
    autor: "",
    date: returnDate(),
    activa: true,
  });

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "activa":
        setPost({
          ...post,
          [event.target.name]: !post.activa,
        });
        break;
      case "img":
        setPost({
          ...post,
          [event.target.name]: event.target.files[0].name,
        });
        break;
      default:
        setPost({
          ...post,
          [event.target.name]: event.target.value,
        });
        break;
    }
    console.log(post);
  };

  const isFormValid = () => {
    if (post.titulo.trim().length === 0) {
      setMsgError("El titulo esta vacio");
      return false;
    } else if (post.desc.trim().length === 0) {
      setMsgError("La descripción esta vacia");
      return false;
    } else if (post.categoria === "") {
      setMsgError("No categoria seleccionada");
      return false;
    } else if (post.categoria === "") {
      setMsgError("No categoria seleccionada");
      return false;
    }
    return true;
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log(post);

      const docRef = await addDoc(collection(db, 'noticias'), post);
      console.log("Document written with ID: ", docRef.id);
      setMsgError(false);
    }
  };

  return (
    <Container>
      <SubHeader title="New Post" />
     
      <form onSubmit={handlerSubmit}>
      {msgError && (
        <div className="alert alert-danger" role="alert">
          {msgError}
        </div>
      )}
        <div className="form-group">
          <label>Titulo</label>
          <input
            value={post.titulo}
            onChange={handleInputChange}
            type="text"
            name="titulo"
          ></input>
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={post.desc}
            onChange={handleInputChange}
            name="desc"
          />
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            /* value={post.img} */
            className="form-control"
            onChange={handleInputChange}
            type="file"
            name="img"
          ></input>
        </div>
        <div className="form-group">
          <label>Fecha</label>
          <input
            value={post.date}
            onChange={handleInputChange}
            type="date"
            name="date"
          ></input>
        </div>
        <div className="form-group">
          <label>Autor</label>
          <input
            value={post.autor}
            onChange={handleInputChange}
            type="text"
            name="autor"
          ></input>
        </div>
        <div className="form-group">
          <label>Categoria</label>
          <select
          className="form-select"
            value={post.categoria}
            onChange={handleInputChange}
            name="categoria"
          >
            <option value="" disabled></option>
            <option value="tenis">Tenis</option>
            <option value="futbol">Fútbol</option>
            <option value="eeuu">EEUU</option>
            <option value="noticia">Noticia</option>
          </select>
        </div>
        <div className="form-check">
          <input
            name="activa"
            onChange={handleInputChange}
            type="checkbox"
            className="form-check-input"
           checked={post.activa}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            activa
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Container>
  );
};

export default NewPost;
