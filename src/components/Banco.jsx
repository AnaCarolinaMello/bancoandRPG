
import { useState } from "react";
import "./Banco.css"

function Banco(){
    let [alteracao, setAlteracao] = useState(0)
    let [dados, setDados] = useState(0)

    function changeValor(v){
        let value = document.querySelector("#overValue")
        value.style = "display: none"
        setAlteracao(Math.floor(alteracao = v.target.value))
    }

    function depositar(){
        let value = document.querySelector("#overValue")
        value.style = "display: none"
        setDados(dados = dados + alteracao)
        document.querySelector("#valor").value = ""
    }

    function retirar(){
        let teste0 = dados - alteracao
        console.log(teste0)
        if(teste0 >= 0){
            setDados(dados = dados - alteracao)
            document.querySelector("#valor").value = ""
        }else{
            let value = document.querySelector("#overValue")
            value.style = "display: block"
        }
    }
    return(
        <div id="exibirB">
            <h3>Saldo: {dados}</h3>
            <lable id="overValue">Valor a retirar é maior que o saldo na conta</lable>
            <input placeholder="Digite o valor da transação" onChange={changeValor} id="valor"></input>
            <div id="botoes">
                <button onClick={depositar}>Depositar</button>
                <button onClick={retirar}>Retirar</button>
            </div>
        </div>
    )
}

export default Banco