import { getStorage, ref, getDownloadURL } from "firebase/storage";
import React, { useState } from 'react'

const ImageUser = ({ urlImagen }) => {
  const [imagen, setimagen] = useState("");

  const storage = getStorage();
  getDownloadURL(ref(storage, `files/${urlImagen}`))
    .then((url) => {
      setimagen(url);
    })
    .catch((error) => {
      console.error(error)
    });
  return (<div>
    <img src={imagen} alt="Imagen usuario"></img>
  </div>
  )
}

export default ImageUser