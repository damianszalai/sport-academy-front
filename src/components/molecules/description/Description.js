import React from 'react'
import { Logo } from '../../../assets'
import Container from './style'

const Description = () => {
  return (
    <Container>
    <article className="container">
      <div>
        <h2>DESCRIPCIÓN</h2>
        <p>
          Estudiar en Estados Unidos con beca deportivo es una realidad que
          muchos jóvenes deportistas de nuestras academias han podido
          cumplir. Nos enfocamos en que el proceso de obtención de beca sea
          una experiencia perfecta para el alumno y para su familia.
          Entendemos que está en juego la educación de uno de nuestros
          alumnos, es por esto que nuestro grupo de profesionales trabaja de
          forma personalizada con la familia para brindar la calidad de
          servicio que se merece.
        </p>
      </div>
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
    </article>
  </Container>
  )
}

export default Description