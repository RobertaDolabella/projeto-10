import { useContext, useState } from "react"
import UserContext from "../../contexts/UserContext"
import Header from "../Layout/Header.js"
import Footer from "../Layout/Footer.js"
import '../Layout/Header.css'
import '../Layout/Footer.css'
import Adicionar from "./Adiocionar"
import CriarHabitos from "./Criarhabito"
import './TelaHabito.css'


export default function TelaHabito() {
    
    const { foto, token, setListaSemana, listaSemana,listaCalendarioSemana , setListaCalendarioSemana, listaHabitos, setListaHabitos } = useContext(UserContext);
    const [modoAdicionar, setModoAdicionar] = useState(false)

    return (
        <>        
        < Header />
        <div className="container-habito">
            <div className="titulo">
                <h1>Meus hábitos</h1>
                <button className="adicionar" onClick={() => setModoAdicionar(true)}>+</button>
            </div>
            <div>
            {!modoAdicionar ? "" : <Adicionar
                listaHabitos={listaHabitos}
                setListaHabitos={setListaHabitos}
                modoAdicionar={modoAdicionar}
                setModoAdicionar={setModoAdicionar}
                token={token}
                listaCalendarioSemana={listaCalendarioSemana}
                setListaCalendarioSemana={setListaCalendarioSemana} />}
            </div>
            <div>
                <CriarHabitos 
            setListaHabitos={setListaHabitos}
            listaHabitos={listaHabitos} 
            token={token}
            setListaSemana ={setListaSemana}
            listaSemana = {listaSemana} />
                </div>
            < Footer />

        </div>
        </>

    )
}