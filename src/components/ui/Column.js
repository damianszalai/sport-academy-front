import React from 'react'
import Container from './style'

const Column = ({children, columns}) => {
  return (
    <Container columns={columns} className='container'>
        {children}
    </Container>
  )
}

export default Column