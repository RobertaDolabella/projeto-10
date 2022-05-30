import axios from "axios"
import { useEffect } from "react"
export default function CriarHabitos({ setListaHabitos, listaHabitos}) {
    const GET = ('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits')
    const dataLocalSerializada = localStorage.getItem("dataLocal")
        const dataLocal = JSON.parse(dataLocalSerializada)
        const tokenLocal = dataLocal.token
    const autorizacao = {
        headers: {
            Authorization: `Bearer ${tokenLocal}`
        }
    }
    const diasSemana =[
        { id: 1, dia: "D", selecionado: false },
        { id: 2, dia: "S", selecionado: false },
        { id: 3, dia: "T", selecionado: false },
        { id: 4, dia: "Q", selecionado: false },
        { id: 5, dia: "Q", selecionado: false },
        { id: 6, dia: "S", selecionado: false },
        { id: 7, dia: "S", selecionado: false }]
    useEffect(() => {
        const promiseGerarHabitos = axios.get(GET, autorizacao)
        promiseGerarHabitos.then((response) => setListaHabitos(response.data))
    }, [setListaHabitos, listaHabitos])


    function deletar(habito) {
        const GETDELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}`
        const promiseDelete = axios.delete(GETDELETE, autorizacao)
        promiseDelete((response) => setListaHabitos(response.data))
    }

    if (listaHabitos.length === 0) {
        return (
            <p className="habito-vazio">
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p>);
    } else {
        return (

            <div>
                {listaHabitos.map((habito) =>
                    <div className="container-habitos">
                        <div className="habitos">
                            {habito.name}
                            <button className="deletar" onClick={() => deletar(habito)}><ion-icon className="trash" name="trash"></ion-icon></button>
                        </div>

                        <div className="container-botao">
                            {diasSemana.map(dia =>
                                <button className={habito.days.some((day) => day === dia.id) ? "selecionado" : "dias"}>{dia.dia}</button>
                            )}
                        </div>
                    </div>
                )}
            </div>

        )

    }
}