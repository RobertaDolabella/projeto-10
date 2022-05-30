import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
export default function Footer() {
    const { habitosDeHoje, setHabitosDeHoje } = useContext(UserContext);
    const navigate = useNavigate();
    const dataLocalSerializada = localStorage.getItem("dataLocal")
    const dataLocal = JSON.parse(dataLocalSerializada)
    const tokenLocal = dataLocal.token
    const autorizacao = {
        headers: {
            Authorization: `Bearer ${tokenLocal}`
        }
    }
    const GETHOJE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    GerarHabitos()
    function GerarHabitos() {
        useEffect(() => {
            const promiseHoje = axios.get(GETHOJE, autorizacao)
            promiseHoje.then((response) => setHabitosDeHoje(response.data))
        }, [])
    }
    function mudarParaHabitos() {
        navigate('/habitos')
    }
    function mudarParaHoje() {
        navigate('/hoje')
    }
    function mudarParaHistorico() {
        navigate('/historico')
    }
    const valor = habitosDeHoje.filter(hoje => hoje.done).length !== 0 ? habitosDeHoje.filter(hoje => hoje.done).length / habitosDeHoje.length * 100 : 0
    return (
        <div className="footer">
            <button className="botoes-laterais" onClick={mudarParaHabitos}>Hábitos</button>
            <button className="hoje" onClick={mudarParaHoje} label="Background">
                <CircularProgressbar
                    value={valor}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                /></button>
            <button className="botoes-laterais" onClick={mudarParaHistorico}> Histórico</button>
        </div>
    )
}
