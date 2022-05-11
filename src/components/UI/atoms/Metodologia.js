import React from "react";
import { motion } from "framer-motion";

const Metodologia = ({ title, aa, children }) => {
  return (
    <article>
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity:1 }}
        transition={{delay: (aa * 0.3), duration: 0.85, ease: "easeOut" }}
      >
      <h2>{title}</h2>
      <div>{children}</div>
    </motion.div>
    </article>
  );
};

export default Metodologia;
