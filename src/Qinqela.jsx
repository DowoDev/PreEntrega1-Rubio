import React, { useState } from 'react';
import './Qinqela.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CardsDatos from './components/Data/Productos';

function Qinqela() {
  const [totalPrecio, setTotalPrecio] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleImageClick = (imgUrl, title, description) => {
    setSelectedImage(imgUrl);
    setSelectedTitle(title);
    setSelectedDescription(description);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
    setSelectedTitle('');
    setSelectedDescription('');
  };

  //CAMBIO: GENERO UN ARRAY CON LOS DATOS DE LOS CAFES PARA QUE SE ITEREN LUEGO SOBRE ESE ARRAY PARA RENDERIZARA LAS TARJETAS
  
  return (
    <>
      <NavBar />
      <br /><br /><br /><br /><br />
      <div className='arrow'>
       <a href="#" title="Back to Top"><img src="./src/assets/logos/up-arrow-alt-regular-24.png" alt="" />UP</a>
      </div>

      <ItemListContainer/>
      <br />
      <div className='container'>
        <h1 className='big'>Te ofrecemos la mejor calidad en productos. <strong className='yellow'>Disfrutalos!</strong></h1>
        <br />
        <div className='row'>
          {CardsDatos.map((dato, index) => (
            <React.Fragment key={index}>
              <div className={`col-3 card${index + 1}`}>
                <Card
                  title = {dato.title}
                  description = {dato.description}
                  img = {dato.img}
                  img2 = {dato.img2}
                  botonPrecio = {`$${dato.botonPrecio}`}
                  precioSinSimbolo={dato.botonPrecio}
                  onImageClick = {() => {
                    handleImageClick(dato.img, `${dato.title} BLEND`, dato.description);
                    handleCardClick(dato.title, dato.botonPrecio);
                  }}
                  totalPrecio = {totalPrecio}
                  setTotalPrecio = {setTotalPrecio}
                />
              </div>
              {((index + 1) % 4 === 0 && index !== CardsDatos.length - 1) && (
                <div >
                  <br />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        {selectedImage && (
          <div className="image-modal">
            <span className="close-button" onClick={handleCloseImage}>
              &times;
            </span>
            <img src={selectedImage} alt="Imagen Ampliada" style={{ width: '600px' }} />
            <h2 className='bigProd2'>{selectedTitle}</h2>
            <p className='card-text2'>{selectedDescription}</p>
          </div>
         )}
      </div>
      <>
        <div className="me">
        <br />
        <br />
          <a href="https://github.com/DowoDev" target="_blank" className="iconmin"><img className='arrowFun' src="./src/assets/logos/right-arrow-alt-regular-108.png" alt="" /> Design by <img src="./src/assets/logos/github-logo-24.png" alt="" /><b className="wow"> DowoDev</b> ·
            <b> 2023</b></a>
        </div>
      </>
    </>
  )
}

export default Qinqela