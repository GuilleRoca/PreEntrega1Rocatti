import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
/* import "bulma/css/bulma.min.css" */
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fuga quas voluptatibus. Placeat repellat obcaecati amet tenetur rerum? Saepe maiores necessitatibus odio, culpa aspernatur facere distinctio excepturi minus similique repudiandae!"/>
    </div>
  )
}

export default App
