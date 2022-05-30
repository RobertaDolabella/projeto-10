import dayjs from 'dayjs'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import '../Layout/Header.css'
import '../Layout/Footer.css'
import './TelaHoje.css'
import UserContext from '../../contexts/UserContext'
export default function TelaHoje() {
    const { token, habitosDeHoje, setHabitosDeHoje, habitoFeito, setHabitoFeito } = useContext(UserContext)
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"]
    const GETHOJE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    const POSTFEITO = ''
    const autorizacao = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function GerarHabitos() {
        useEffect(() => {
            const promiseHoje = axios.get(GETHOJE,autorizacao)
            promiseHoje.then((response) => setHabitosDeHoje(response.data))
        }, [setHabitoFeito, habitoFeito])
    }
    GerarHabitos()
    let diaIndex = dayjs().format('d')
    diaIndex = Number(diaIndex)
    const diaMes = dayjs().format("DD/MM")
    const diaSemana = diasSemana[diaIndex]
    function MarcarHabito(hoje) {
        if (hoje.done === false) {
            console.log(autorizacao)
                const promiseFazer = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${hoje.id}/check`,"", autorizacao)
                promiseFazer.then(setHabitoFeito)
        }
        if (hoje.done === true) {
                const promiseDesfazer = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${hoje.id}/uncheck`,"", autorizacao)
                promiseDesfazer.then(setHabitoFeito)
        }
    }



    return (
        <div className='container-hoje'>
            <Header />
            <div className='container-titulo-hoje'>
            <h1>{diaSemana}, {diaMes}</h1>
            {habitosDeHoje.some(hoje=>hoje.done)?  <p className="habito-feito">{habitosDeHoje.filter(hoje=>hoje.done).length/habitosDeHoje.length*100}% dos habitos concluidos</p>: <p className="habito-vazio">Nenhum hábito concluído ainda</p>}
            </div>
            {habitosDeHoje.map(hoje =>
                <div className='container-tarefa-hoje'>
                    <div>
                        <h2 className='tarefa'>{hoje.name}</h2>
                        <h4> Sequência atual: {hoje.currentSequence} dias</h4>
                        <h4>Seu recorde: {hoje.highestSequence} dias</h4>
                    </div>
                    <div>
                        <button className={hoje.done ? "habito-selecionado" : "nao-selecionado"} onClick={() => MarcarHabito(hoje)}><ion-icon className="check" name="checkmark-outline"></ion-icon></button>
                    </div>
                </div>)}
            <Footer />
        </div>
    )
}