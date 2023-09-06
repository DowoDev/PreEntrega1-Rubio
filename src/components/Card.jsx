import React from "react";
import Swal from "sweetalert2";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Card = ({ title, description, img, img2, botonPrecio, onImageClick }) => {
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(img);
    }
  };
  const handleAddToCartClick = () => {
    Swal.fire({
      title: `Agregaras a tu carrito \n${title} BLEND!\n`+`<img class='imgCoffee2' width='200px' src=${img2} alt = ${ title }/>`,
      text: 'Estas seguro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#80ff00',
      cancelButtonColor: '#db143c',
      confirmButtonText: 'Si, agregarlo!',
      cancelButtonText: 'No, todavía'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `<img className='icon' src='./src/assets/logos/happyCoffee.gif' alt='Carrito'/>`,
          `${title} BLEND\n agregado al carrito!`,
        )
        console.log(title,'BLEND:', botonPrecio)
      }
    })
    
  };

  return (
    <div className='card'>
      <OverlayTrigger overlay={<Tooltip x-placement="bottom-end" datta-popper-placement="bottom-end" id="tooltip-disabled">Clickeame para agrandarme</Tooltip>}>
      <div className='image-container' onClick={handleImageClick}>
        <img className='imgCoffee' src={img} alt = { title }/>
      </div>
      </OverlayTrigger>
      <div className='card-body cards'>
        <p className='bigProd'>{ title }<span className='flavor'> BLEND.</span></p>
        <p className='card-text'>{ description }</p>
        <p className='price'>{ botonPrecio }</p>
        <button className='botonCompra' onClick={handleAddToCartClick}> 
          AGREGAR CAFÉ <img className='icon' src='./src/assets/logos/coffee-togo-regular-60.png' alt='Carrito'/>
        </button>
      </div>
    </div>
  )
}

export default Card