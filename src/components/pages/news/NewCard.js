import React from 'react'
import { motion } from "framer-motion";

const NewCard = ({titulo, categoria, date, desc}) => {
  return (
    <motion.article
    initial={{ transform: "scale(0)", opacity: 0 }}
    animate={{ transform: "scale(1)", opacity: 1 }}
    transition={{ duration: 0.45, ease: [0.96, -0.23, 0.03, 1.27] }}
  >
    <div></div>
    <div>
      <p className="category">{categoria}</p>
      <h2>{titulo}</h2>
      <p className="date">{date}</p>
      <p className="desc">{desc}</p>
    </div>
  </motion.article>
  )
}

export default NewCard