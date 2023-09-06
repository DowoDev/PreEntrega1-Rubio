import React, { useState } from 'react';
import './Qinqela.css';
import Card from './components/Card';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function Qinqela() {
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

  return (
    <>
      <NavBar />
      <br />
      <CartWidget/>
      <div className='arrow'>
       <a href="#" title="Back to Top"><img src="./src/assets/logos/up-arrow-alt-regular-24.png" alt="" />UP</a>
      </div>

      <ItemListContainer/>
      <br />
      <div className='container'>
        <h1 className='big'>Te ofrecemos la mejor calidad en productos. <strong className='yellow'>Disfrutalos!</strong></h1>
        <br />
        <div className='row'>
          <div className='col-3 card1'>
            <Card title = 'NATURAL'
              description ='Sabor natural y único sin fertizilantes ni pesticidas sintéticos, que desarrollan un sabor y aroma únicos en nuestro paladar. Free Our Earth!' 
              img = './src/assets/img/coffee_natural.png'
              botonPrecio = 'PRECIO  $ 2.900'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_natural.png',
                  'NATURAL BLEND',
                  'Sabor natural y único sin fertilizantes ni pesticidas sintéticos, que desarrollan un sabor y aroma únicos en nuestro paladar. Free Our Earth.'
                )
              }
            />
          </div>
          <div className='col-3 card2'>
            <Card title = 'STRONG' 
              description='Sabor único, intenso y profundo, con notas de chocolate negro y una sensación única con cuerpo completo que se aprecia en todo nuestro paladar.' 
              img = './src/assets/img/coffee_strong.png'
              botonPrecio = 'PRECIO  $ 2.300'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_strong.png',
                  'STRONG BLEND',
                  'Sabor único, intenso y profundo, con notas de chocolate negro y una sensación única con cuerpo completo que se aprecia en todo nuestro paladar.'
                )
              }
            />
          </div>
          <div className='col-3 card3'>
            <Card title = 'SUNNY' 
              description='Sabor dulce y afrutado que te hará sentir como si estuvieras en una playa paradisíaca única. Frutas y experiencia de café que te transportan. Summer!'
              img = './src/assets/img/coffee_sunny.png'
              botonPrecio = 'PRECIO  $ 2.900'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_sunny.png',
                  'SUNNY BLEND',
                  'Sabor dulce y afrutado que te hará sentir como si estuvieras en una playa paradisíaca única. Frutas y experiencia de café que te transportan. Summer!'
                )
              }
            />
          </div>
          <div className='col-3 card7'>
            <Card title = 'SWEET TETÉ' 
              description='Sabor dulce, suave y cremoso, con toques de vainilla, miel y malvaviscos, que harán que cada taza sea una experiencia única y deliciosa. Así es Teté.'
              img = './src/assets/img/coffee_tete.png'
              botonPrecio = 'PRECIO   $ 2.900'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_tete.png',
                  'SWEET TETÉ',
                  'Sabor dulce y afrutado que te hará sentir como si estuvieras en una playa paradisíaca única. Frutas y experiencia de café que te transportan. Summer!'
                )
              }
            />
          </div>
          <div>
            <br />
          </div>
          <div className='col-3 card4'>
            <Card title = 'BREEZE' 
              description='Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!'
              img = './src/assets/img/coffee_breeze.png'
              botonPrecio = 'PRECIO  $ 2.700'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_breeze.png',
                  'BREEZE BLEND',
                  'Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!'
                )
              }
            />
          </div>
          <div className='col-3 card8'>
            <Card title = 'COOL' 
              description='Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!'
              img = './src/assets/img/coffee_cool.png'
              botonPrecio = 'PRECIO  $ 2.700'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_cool.png',
                  'COOL BLEND',
                  'Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!'
                )
              }
            />
          </div>
          <div className='col-3 card5'>
            <Card title = 'BLACK'
              description ='Con ciertas notas de cacao y frutos secos dulces, con un toque de amargor que equilibra perfectamente su dulzura natural en nuestro paladar.' 
              img = './src/assets/img/coffee_black.png'
              botonPrecio = 'PRECIO  $ 1.800'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_black.png',
                  'BLACK BLEND',
                  'Con ciertas notas de cacao y frutos secos dulces, con un toque de amargor que equilibra perfectamente su dulzura natural en nuestro paladar.'
                )
              }
            />
          </div>
          
          <div className='col-3 card6'>
            <Card title = 'CHOCKO' 
              description='Sabor y elección perfecta para los amantes del buen chocolate y el café. Delicioso café con chocolate, de un sabor único, dulce y satisfactorio.' 
              img = './src/assets/img/coffee_chocko.png'
              botonPrecio = 'PRECIO  $ 2.100'
              onImageClick={() =>
                handleImageClick(
                  './src/assets/img/coffee_chocko.png',
                  'CHOCKO BLEND',
                  'Sabor y elección perfecta para los amantes del buen chocolate y el café. Delicioso café con chocolate, de un sabor único, dulce y satisfactorio.'
                )
              }
            />
          </div>
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
          <a href="https://github.com/DowoDev" target="_blank" className="iconmin">Design by <img src="./src/assets/logos/github-logo-24.png" alt="" /><b className="wow"> DowoDev</b> ·
            <b> 2023</b></a>
        </div>
      </>
    </>
  )
}

export default Qinqela
