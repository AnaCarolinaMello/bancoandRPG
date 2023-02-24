
import { useState } from "react";
import './RPG.css'
// import Lista from './Lista'

// function Lista(dados){   
//     return(
//         <div>
//             {dados.map(value =>(
//                 <div key={value.id}>
//                     <h3>Nome: {value.nome}</h3>
//                     <h4>Tipo: {value.tipo}</h4>
//                     <label>Descrição: {value.descricao}</label>
//                 </div>
//             ))}
//         </div>
//     )
// }

function RPG(){
    let [nome, setNome] = useState('')
    let [tipo, setTipo] = useState('')
    let [descricao, setDescricao] = useState('')
    let [id, setId] = useState(0)
    let [dados, setDados] = useState([])
    function changeNome(n){
        setNome(nome = n.target.value)
    }
    function changeTipo(t){
        setTipo(tipo = t.target.value)
    }
    function changeDescricao(d){
        setDescricao(descricao = d.target.value)
    }
    function salvar(){
        dados.forEach((value)=>{
            let procura = document.querySelector("#"+value.nome)
            procura.style = ' border:solid white 2px; color: white'
        })
        setId(id = id+1)
        console.log(id)
        setDados([...dados,{
            id: id,
            nome: nome,
            tipo: tipo,
            descricao: descricao
        }])
        setNome('')
        setTipo('')
        setDescricao('')
        let exibicao = document.querySelector('#exibicao')
        let magias = document.querySelector('#magias')
        magias.style.display = 'block'
        // exibicao.innerHTML = <Lista dados={dados}></Lista>
    } 
    function procurar(){
        let search = dados.filter((h)=> h.nome.toUpperCase() === nome.toUpperCase() || h.tipo.toUpperCase() === tipo.toUpperCase())
        let index = dados.indexOf(search[0])
        if(index != -1){
            dados.forEach((value)=>{
                if(value.nome == nome || value.tipo == tipo){
                    let procura = document.querySelector("#"+value.nome)
                    procura.style = ' border:solid red 2px; color: red' 
                }
            })
        }
    }

    return(
        <div id="exibicao">
            <div id='magias'>
                {dados.map(value =>(
                    <div key={value.id} className="magia" id={value.nome}>
                      <div className="titulo">
                        <h3>Nome: {value.nome}</h3>
                        <h4>Tipo: {value.tipo}</h4>
                      </div>
                      <label>Descrição: {value.descricao}</label>
                  </div>
              ))}
            </div>
            <div id="formulario">
                <input placeholder="Nome da magia" value={nome} onChange={changeNome}></input>
                <input placeholder="Tipo da magia" value={tipo} onChange={changeTipo}></input>
                <textarea placeholder="Descrição da magia" value={descricao} onChange={changeDescricao}></textarea>
                <div id="botoes2">
                    <button onClick={salvar}>Salvar</button>
                    <button onClick={procurar}>Procurar</button>
                </div>
            </div>
        </div>
    )
}

export default RPG