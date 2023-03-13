import CartWidget from "../CartWidget"
const NavBar = () => {
  return (
    <div className="navbar">
        <img src="https://img.freepik.com/premium-vector/cocktails-logo-inspiration-drink-glass-bar-restaurant_63578-164.jpg?w=2000" alt="logo" className="logo" />
        <a href="#">Home</a>
        <a href="#">Productos</a>
        <a href="#">Ubicación</a>
        <a href="#">Contacto</a>
        <CartWidget/>
    </div>
  )
}

export default NavBar