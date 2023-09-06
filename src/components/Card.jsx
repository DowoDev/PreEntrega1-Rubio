
const Card = ({ title, description, img, botonPrecio, onImageClick }) => {
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(img);
    }
  };

  return (
    <div className='card'>
      <div className="image-container" onClick={handleImageClick}>
        <img className='imgCoffee' src={img} alt = { title }/>
      </div>
      
      <div className='card-body cards'>
        <p className='bigProd'>{ title }<span className='flavor'> BLEND.</span></p>
        <p className='card-text'>{ description }</p>
        <p className='price'>{ botonPrecio }</p>
        <button className='botonCompra'> COMPRAR </button>
      </div>
    </div>
  )
}

export default Card