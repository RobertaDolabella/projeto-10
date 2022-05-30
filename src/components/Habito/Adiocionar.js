import axios from 'axios'
import { useEffect, useState } from "react"
import BotoesDias from './BotoesDias'
export default function Adicionar({  setModoAdicionar, token,listaCalendarioSemana , setListaCalendarioSemana }) {
    const POST = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
    const [itemAdicionar, setItemAdicionar] = useState()
    const reloadListaSemana=[{ id: 1, dia: "D", selecionado: false },
    { id: 2, dia: "S", selecionado: false },
    { id: 3, dia: "T", selecionado: false },
    { id: 4, dia: "Q", selecionado: false },
    { id: 5, dia: "Q", selecionado: false },
    { id: 6, dia: "S", selecionado: false },
    { id: 7, dia: "S", selecionado: false }]
    const autorizacao = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
 
    function salvar(event) {
        event.preventDefault();
        if (itemAdicionar == null) {
            return (
                alert("você precisa adicionar um hábito")
            )
        }
        if(listaCalendarioSemana.some(dia=>dia.selecionado)){
        let diasSelecionados = listaCalendarioSemana.filter((dia)=>dia.selecionado===true)
    
        diasSelecionados = diasSelecionados.map(dia=> dia.id)
        
        const body = {
            name: itemAdicionar,
            days: diasSelecionados
        }
        const promiseHabito = axios.post(POST, body, autorizacao)
        promiseHabito.then(setListaCalendarioSemana(reloadListaSemana))
        setModoAdicionar(false)
    }else{
            alert("É preciso selecionar um dia da semana")
    }
}

    function cancelar() {
        console.log("entrou no cancelar")
        setModoAdicionar(false)
    }
    return (
        <div className="container-adicionar">
            <input className="adicionar-habito" placeholder="nome do hábito" onChange={(e) => setItemAdicionar(e.target.value)}></input>
            <div className="container-botao">
                < BotoesDias listaCalendarioSemana={listaCalendarioSemana} setListaCalendarioSemana={setListaCalendarioSemana} />
            </div>
            <div className="finalizar-habito">
                <button className="cancelar" onClick={cancelar}>Cancelar</button>
                <button className="salvar" onClick={salvar}>Salvar</button>
            </div>
        </div>

    )
}