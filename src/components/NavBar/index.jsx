import Carrito from "../CartWidget"
const NavBar = () => {
  return (
    <div className="navbar">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shop-ecommerce-logo-app-icon-logo-design-template-910c781293690546d77a3828f9e901ee_screen.jpg?ts=1611442808" alt="logo" className="logo" />
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Ubicación</a>
        <a href="#">Contacto</a>
        <Carrito/>
    </div>
  )
}

export default NavBar