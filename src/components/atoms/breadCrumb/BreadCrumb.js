import React from "react";
import { Link } from "react-router-dom";
import Container from "./style";

const BreadCrumb = ({ secciones }) => {
  return (
    <Container>
      <ol className="breadcrumb">
        {secciones.map((item,i) => (
          <li key={i} className="breadcrumb-item">
           {item.active ? <span>{item.name}</span> : <Link to={item.to}>{item.name}</Link>}
          </li>
        ))}

        {/*  <li className="breadcrumb-item"><Link to="#">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Library</li> */}
      </ol>
    </Container>
  );
};

export default BreadCrumb;
