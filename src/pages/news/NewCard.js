import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImagePost from "./ImagePost";

const NewCard = ({ titulo, categoria, date, desc, img, id, num }) => {
  return (
    <motion.article
      style={num === 5 && { display: "none" }}
      initial={{ transform: "scale(0)", opacity: 0 }}
      animate={{ transform: "scale(1)", opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
    >
      <ImagePost urlImagen={img} />
      <div>
        <p className="category">{categoria}</p>
        <h2>{titulo}</h2>
        <p className="date">{date}</p>
        <p className="desc">{desc}</p>
      </div>
      <div>
        <Link className="btn btn-primary" to={`/noticias/${id}`}>
          Ver Más
        </Link>
      </div>
    </motion.article>
  );
};

export default NewCard;
