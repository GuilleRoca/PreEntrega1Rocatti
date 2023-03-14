import CartWidget from "../CartWidget"
const NavBar = () => {
  return (
    <div className="navbar">
        <img src="https://img.freepik.com/vector-gratis/plantilla-logotipo-salon-cocteles-copa-coctel-minima_53876-117632.jpg?size=626&ext=jpg&ga=GA1.2.841188797.1678826306&semt=ais" alt="logo" className="logo" />
        <div className="navText"><a href="#">Home</a></div>
        <div className="navText"><a href="#">Productos</a></div>
        <div className="navText"><a href="#">Contacto</a></div>
        <div className="navText"><a href="#">Ubicación</a></div>
        <CartWidget/>
    </div>
  )
}

export default NavBar