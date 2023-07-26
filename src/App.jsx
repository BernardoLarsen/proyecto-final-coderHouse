import './App.css'
import { ItemListContainer } from './components/ItemListContainer';
import {NavBar} from './components/NavBar'

function App() {
  return(
<>
<div className='navBar'><NavBar/> </div>
<ItemListContainer  greeting = "Bienvenidos a mi Pagina"/>
</>

  );
}

export default App
