import Nav from 'react-bootstrap/Nav';

function CartWidget() {
  return (
    <>
        <div className='carrito'>
          <Nav className="me-auto counter">
            <img
              src='./src/assets/logos/coffee-togo-regular-60.png'
              width="50px"
              height="55.12px"
              alt="Carrito"
            />
            <p className='countProduct'>76</p>
          </Nav>
        </div>
    </>
  );
}

export default CartWidget;