import React from "react";
import { motion } from "framer-motion";

const Imagen = ({image, setImage}) => {
  return (
    <div onClick={() => setImage(null)}>
      <i class="bi bi-x" onClick={() => setImage(null)}></i>
      <motion.img
        src={image}
        initial={{ transform: "translate(-50%,-70%)", opacity: 0 }}
        animate={{ transform: "translate(-50%,-50%)", opacity: 1 }}
        transition={{
          duration: 0.45,
        }}
      />
    </div>
  );
};

export default Imagen;
