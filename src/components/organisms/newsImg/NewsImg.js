import React, { useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Container from './style'

const NewsImg = ({ urlImagen }) => {
  const [imagen, setimagen] = useState("");

  const storage = getStorage();
  getDownloadURL(ref(storage, `news/${urlImagen}`))
    .then((url) => {
      setimagen(url);
    })
    .catch((error) => {
      console.error(error);
     setimagen("//via.placeholder.com/350x150")
    });
  return (<Container bg={imagen}></Container>)
};

export default NewsImg;
