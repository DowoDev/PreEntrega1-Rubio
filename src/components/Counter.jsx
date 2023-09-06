import React,{ useState } from 'react'

const Counter = ({count, sumar, restar}) => {

  return (
    <div>
      <p>Valor: {count}</p>
      <button className='btn btn-danger btn-lg'onClick={() => restar()}>-</button>
      <button className='btn btn-success btn-lg' onClick={() => sumar()}>+</button>
    </div>
  )
}

export default Counter