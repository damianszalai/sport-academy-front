import React, { useState } from "react";
import Header from "../../components/molecules/header/Header";
import NewPostForm from "./NewPostForm";
import StylePost from "./stylePost";
import NewCategory from "./NewCategory";

const News = () => {
  const [form, setForm] = useState(false);

  return (
    <>
      <Header title="Noticias"></Header>

      {form && <NewPostForm className="fijo" />}

      <StylePost className="container-fluid">
        <button
          onClick={() => setForm(!form)}
          className={form ? "btn btn-primary cancel" : "btn btn-primary"}
        >
          <i class="bi bi-plus-lg"></i>
        </button>

        <NewCategory categoria="noticias" title="Últimas Noticias" />
        <NewCategory
          categoria="noticias"
          title="Noticias de Fútbol"
          subCategoria="futbol"
        />
        <NewCategory
          categoria="noticias"
          title="Noticias de Tenis"
          subCategoria="tenis"
        />
        <NewCategory
          categoria="noticias"
          title="Noticias Generales"
          subCategoria="noticia"
        />
      </StylePost>
    </>
  );
};

export default News;
