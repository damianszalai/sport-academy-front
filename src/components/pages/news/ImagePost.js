import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";

const ImagePost = ({ urlImagen }) => {
  const [imagen, setimagen] = useState("");

  const storage = getStorage();
  getDownloadURL(ref(storage, `news/${urlImagen}`))
    .then((url) => {
      setimagen(url);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <figure>
      <img src={imagen} alt="Imagen usuario"></img>
    </figure>
  );
};

export default ImagePost;
