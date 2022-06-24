import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NewsImg from "./../newsImg/NewsImg";
import Container from './style'

const NewsCard = ({ titulo, categoria, date, desc, img, id, num }) => {
  return (
    <Container>
    <motion.div
      style={num === 5 && { display: "none" }}
      initial={{ transform: "scale(0)", opacity: 0 }}
      animate={{ transform: "scale(1)", opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
    >
      <NewsImg urlImagen={img} />
      <div>
        <p className="category">{categoria}</p>
        <h2><Link className="btn btn-primary" to={`/noticias/${id}`}>
          {titulo}
        </Link></h2>
        <p className="date">{date}</p>
{/*         <p className="desc">{desc.replace(/<[^>]+>/g, '')}</p>
 */}      </div>
      <div>
        <Link className="btn btn-primary" to={`/noticias/${id}`}>
          Ver Más
        </Link>
      </div>
    </motion.div>
    </Container>
  );
};

export default NewsCard;
