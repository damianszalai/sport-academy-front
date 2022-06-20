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
     setimagen("//via.placeholder.com/350x150")
    });
  return (<div style={{backgroundImage: `url(${imagen})`}}></div>)
};

export default ImagePost;
