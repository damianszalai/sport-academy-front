import React, { useState } from "react";
import Container from "./style";
import { motion } from "framer-motion";
import { aaMin, bbMin, ccMin } from "../../../../assets";

const Gallery = () => {
  const [image, setImage] = useState(null);

  const imageNes = [aaMin, bbMin, ccMin, aaMin, bbMin, ccMin, aaMin, bbMin, ccMin];

  return (
    <Container>
      <figure className="container">
        {imageNes.map((item, i) => (
          <motion.img
            initial={{ transform: "scale(0)", opacity: 0 }}
            animate={{ transform: "scale(1)", opacity: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.96, -0.23, 0.03, 1.27],
            }}
            key={i}
            alt="i"
            src={item}
            onClick={() => setImage(item)}
          ></motion.img>
        ))}
      </figure>
      {image && (
        <div onClick={() => setImage(null)}>
         
          <i class="bi bi-x-lg" onClick={() => setImage(null)}></i>
          <motion.img
            src={image}
            initial={{ transform: "translate(-50%,-70%)", opacity: 0 }}
            animate={{ transform: "translate(-50%,-50%)", opacity: 1 }} 
            transition={{
              duration: 0.45,
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default Gallery;
