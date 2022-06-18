import React from "react";
import { Link } from "react-router-dom";
import Container from "./style";
import { motion } from "framer-motion";

const Card = ({ years, subtitle, title, linkTo, aa, deporte }) => {
  return (
    <Container deporte={deporte}>
      <motion.div
        initial={{ transform: "scale(0)", opacity: 0 }}
        animate={{ transform: "scale(1)", opacity: 1 }}
        transition={{delay: (aa * 0.3), duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
      >
        <Link to={linkTo}>
          <h2>{title}</h2>
          <h3>
            {years}
            <span>{subtitle}</span>
          </h3>
        </Link>
      </motion.div>
    </Container>
  );
};

export default Card;
