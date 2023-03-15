import CartWidget from "../CartWidget"
const NavBar = () => {
  return (
    <div className="navbar">
        <div><a href="#"><img src="/public/super-logo.png" alt="logo" className="logo" /></a></div>
        <div className="navText"><a href="#">Home</a></div>
        <div className="navText"><a href="#">Productos</a></div>
        <div className="navText"><a href="#">Contacto</a></div>
        <div className="navText"><a href="#">Ubicación</a></div>
        <CartWidget/>
    </div>
  )
}

export default NavBar