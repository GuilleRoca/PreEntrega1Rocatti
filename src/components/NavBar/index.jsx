import CartWidget from "../CartWidget"
const NavBar = () => {
  return (
    <div className="navbar">
        <img src="https://img.freepik.com/premium-vector/cocktails-logo-inspiration-drink-glass-bar-restaurant_63578-164.jpg?w=2000" alt="logo" className="logo" />
        <div className="navText"><a href="#">Home</a></div>
        <div className="navText"><a href="#">Productos</a></div>
        <div className="navText"><a href="#">Contacto</a></div>
        <div className="navText"><a href="#">Ubicación</a></div>
        <CartWidget/>
    </div>
  )
}

export default NavBar