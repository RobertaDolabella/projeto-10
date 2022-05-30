import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import './TelaHistorico.css'

export default function TelaHistorico() {
    return (
<>
            < Header />
        <div className="container-historico">
            <h1 className="titulo-historico">Histórico</h1>
            <p className="historico">Em breve você poderá ver o histórico dos <br/> seus hábitos aqui! </p>
        </div>
        < Footer />
        </>
    )
}