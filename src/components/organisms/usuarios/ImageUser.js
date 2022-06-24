import React, { useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {ImgStyle} from './style'


const ImageUser = ({ urlImagen }) => {
  const [imagen, setimagen] = useState("");

  const storage = getStorage();
  getDownloadURL(ref(storage, `files/${urlImagen}`))
    .then((url) => {
      setimagen(url);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
     <ImgStyle bg={imagen}></ImgStyle>
  );
};

export default ImageUser;
