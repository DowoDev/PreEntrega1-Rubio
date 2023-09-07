import React, { useState } from 'react';
import './Qinqela.css';
import Card from './components/Card';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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

  //CAMBIO: GENERO UN ARRAY CON LOS DATOS DE LOS CAFES PARA QUE SE ITEREN LUEGO SOBRE ESE ARRAY PARA RENDERIZARA LAS TARJETAS
  const cardsDatos = [
    {
      title: 'NATURAL',
      description: 'Sabor natural y único sin fertizilantes ni pesticidas sintéticos, que desarrollan un sabor y aroma únicos en nuestro paladar. Free Our Earth!',
      img: './src/assets/img/coffee_natural.png',
      img2: './src/assets/img/coffee_natural_min.png',
      botonPrecio: '$ 3.100',
    },
    {
      title: 'STRONG',
      description: 'Sabor único, intenso y profundo, con notas de chocolate negro y una sensación única con cuerpo completo que se aprecia en todo nuestro paladar.',
      img: './src/assets/img/coffee_strong.png',
      img2: './src/assets/img/coffee_strong_min.png',
      botonPrecio: '$ 2.300',
    },
    {
      title: 'SUNNY',
      description: 'Sabor dulce y afrutado que te hará sentir como si estuvieras en una playa paradisíaca única. Frutas y experiencia de café que te transportan. Summer!',
      img: './src/assets/img/coffee_sunny.png',
      img2: './src/assets/img/coffee_sunny_min.png',
      botonPrecio: '$ 2.900',
    },
    {
      title: 'SWEET TETÉ',
      description:'Sabor dulce, suave y cremoso, con toques de vainilla, miel y malvaviscos, que harán que cada taza sea una experiencia única y deliciosa. Así es Teté.',
      img: './src/assets/img/coffee_tete.png',
      img2: './src/assets/img/coffee_tete_min.png',
      botonPrecio: '$ 3.250',
    },
    {
      title: 'BREEZE' ,
      description:'Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!',
      img: './src/assets/img/coffee_breeze.png',
      img2: './src/assets/img/coffee_breeze_min.png',
      botonPrecio: '$ 3.150',
    },
    {
      title: 'COOL',
      description:'Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!',
      img: './src/assets/img/coffee_cool.png',
      img2: './src/assets/img/coffee_cool_min.png',
      botonPrecio: '$ 3.150',
    },
    {
      title:'SOFT',
      description:'Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!',
      img:'./src/assets/img/coffee_soft.png',
      img2: './src/assets/img/coffee_soft_min.png',
      botonPrecio: '$ 2.650',
    },
    {
      title: 'CHOCKO',
      description:'Sabor y elección perfecta para los amantes del buen chocolate y el café. Delicioso café con chocolate, de un sabor único, dulce y satisfactorio.',
      img: './src/assets/img/coffee_chocko.png',
      img2: './src/assets/img/coffee_chocko_min.png',
      botonPrecio: '$ 2.800',
    },
    {
      title: 'BLACK',
      description: 'Con ciertas notas de cacao y frutos secos dulces, con un toque de amargor que equilibra perfectamente su dulzura natural en nuestro paladar.' ,
      img: './src/assets/img/coffee_black.png',
      img2: './src/assets/img/coffee_black_min.png',
      botonPrecio: '$ 1.950',
    }
  ]
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
        {/* 
          CAMBIO LA REPETICION DE LAS TARJETAS POR UN ARRAY CON LA INFORMACIÓN DE CADA CAFÉ PARA REDUCIR LA REPETICIÓN DE CODIGO
          <div>
            <div className='col-3 card1'>
              <Card title = 'NATURAL'
                description ='Sabor natural y único sin fertizilantes ni pesticidas sintéticos, que desarrollan un sabor y aroma únicos en nuestro paladar. Free Our Earth!' 
                img = './src/assets/img/coffee_natural.png'
                img2 = './src/assets/img/coffee_natural_min.png'
                botonPrecio = '$ 3.100'
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
                img2 = './src/assets/img/coffee_strong_min.png'
                botonPrecio = '$ 2.300'
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
                img2 = './src/assets/img/coffee_sunny_min.png'
                botonPrecio = '$ 2.900'
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
                img2 = './src/assets/img/coffee_tete_min.png'
                botonPrecio = '$ 3.250'
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
                img2 = './src/assets/img/coffee_breeze_min.png'
                botonPrecio = '$ 3.150'
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
                img2 = './src/assets/img/coffee_cool_min.png'
                botonPrecio = '$ 3.150'
                onImageClick={() =>
                  handleImageClick(
                    './src/assets/img/coffee_cool.png',
                    'COOL BLEND',
                    'Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!'
                  )
                }
              />
            </div>
            <div className='col-3 card9'>
              <Card title = 'SOFT' 
                description='Sabor refrescante y delicioso. Con toques de menta y canela, que haran que tu paladar se refresque en esos días de verano. Servirlo bien Frío!'
                img = './src/assets/img/coffee_soft.png'
                img2 = './src/assets/img/coffee_soft_min.png'
                botonPrecio = '$ 2.650'
                onImageClick={() =>
                  handleImageClick(
                    './src/assets/img/coffee_soft.png',
                    'SOFT BLEND',
                    'Suavidad y ligereza, con notas de frutas y flores tropicales que lo hacen una de las experiencias mas deliciosas para todos los amantes del café.'
                  )
                }
              />
            </div>
            <div className='col-3 card6'>
              <Card title = 'CHOCKO' 
                description='Sabor y elección perfecta para los amantes del buen chocolate y el café. Delicioso café con chocolate, de un sabor único, dulce y satisfactorio.' 
                img = './src/assets/img/coffee_chocko.png'
                img2 = './src/assets/img/coffee_chocko_min.png'
                botonPrecio = '$ 2.800'
                onImageClick={() =>
                  handleImageClick(
                    './src/assets/img/coffee_chocko.png',
                    'CHOCKO BLEND',
                    'Sabor y elección perfecta para los amantes del buen chocolate y el café. Delicioso café con chocolate, de un sabor único, dulce y satisfactorio.'
                  )
                }
              />
            </div>
            <div>
              <br />
            </div>
            <div className='col-3 card5'>
              <Card title = 'BLACK'
                description ='Con ciertas notas de cacao y frutos secos dulces, con un toque de amargor que equilibra perfectamente su dulzura natural en nuestro paladar.' 
                img = './src/assets/img/coffee_black.png'
                img2 = './src/assets/img/coffee_black_min.png'
                botonPrecio = '$ 1.950'
                onImageClick={() =>
                  handleImageClick(
                    './src/assets/img/coffee_black.png',
                    'BLACK BLEND',
                    'Con ciertas notas de cacao y frutos secos dulces, con un toque de amargor que equilibra perfectamente su dulzura natural en nuestro paladar.'
                  )
                }
              />
            </div> 
          </div> 
        */}

          {cardsDatos.map((dato, index) => (
          <React.Fragment key={index}>
            <div className={`col-3 card${index + 1}`}>
              <Card
                title={dato.title}
                description={dato.description}
                img={dato.img}
                img2={dato.img2}
                botonPrecio={dato.botonPrecio}
                onImageClick={() => handleImageClick(dato.img, `${dato.title} BLEND`, dato.description)}
              />
            </div>
            {((index + 1) % 4 === 0 && index !== cardsDatos.length - 1) && (
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