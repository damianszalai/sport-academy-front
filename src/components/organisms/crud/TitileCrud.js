import React from 'react'

const TitileCrud = () => {
  return (
    <thead>
    <tr>
      <th>
        <span className="custom-checkbox">
          <input type="checkbox" id="selectAll" />
          <label htmlFor="selectAll"></label>
        </span>
      </th>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Deporte</th>
      <th>Descripción</th>
      <th>Acciones</th>
    </tr>
  </thead>
  )
}

export default TitileCrud