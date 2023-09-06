import React from 'react'

export const ItemListContainer = ({gretting}) => {
  return (
    <div className='greeting'>
        <h1>Bienvenidos<b className='yellow'>!</b></h1>
        <h3>La Vida Empieza con un <strong className='yellow'>Café!</strong></h3>
      </div>
  )
}

export default ItemListContainer