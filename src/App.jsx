import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const array = [1,2,3,"coderhouse", "react"];



  //sprace operator es: crear un nuevo arreglo por ejemplo con los valores del array de modelo, pero sin modificar sus valores, es una copia de los valores del array modelo. se utiliza con ...nombreDeArreglo
  const array2 = [...array];
  array2[2] = 4;
  console.log(array2)

  return <div>
    {array.map(elemento => {
      console.log(elemento)
      return <p key={elemento}>{elemento}</p>
    })}
  </div>

}

export default App
