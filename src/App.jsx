import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RPG from './components/RPG'
import Banco from './components/Banco'

function App() {
  function rpg(){
    let rpg = document.querySelector("#rpg")
    let banco = document.querySelector("#banco")
    banco.style.display = "none"
    rpg.style.display = "flex"
  }
  function banco(){
    let rpg = document.querySelector("#rpg")
    let banco = document.querySelector("#banco")
    rpg.style.display = "none"
    banco.style.display = "flex"
  }
  return (
    <div className="App">
      <div>
        <button onClick={rpg} className="botao">RPG</button>
        <button onClick={banco} className="botao">Banco</button>
      </div>
      <div id="rpg">
        <RPG></RPG>
      </div>
      <div id="banco">
        <Banco></Banco>
      </div>
    </div>
  )
}

export default App
