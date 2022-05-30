export default function BotoesDias({ setListaCalendarioSemana, listaCalendarioSemana }) {

    function selecionarDia(element) {
        if (element.selecionado === true) {
            listaCalendarioSemana.map((dia) => {
                if (element.id === dia.id) {
                    dia.selecionado = false
                    setListaCalendarioSemana(listaCalendarioSemana)
                }
            })
        }
        else {
            listaCalendarioSemana.map((dia) => {
                if (element.id === dia.id) {
                    dia.selecionado = true
                    setListaCalendarioSemana(listaCalendarioSemana)
                }
            })
        }

    }
    return (
        listaCalendarioSemana.map((dia) => <button className={dia.selecionado ? "selecionado" : "dias"} onClick={() => selecionarDia(dia)}>{dia.dia}</button>)
    )
}
