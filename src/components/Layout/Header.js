import { useContext } from "react"
export default function Header(){
    const dataLocalSerializada = localStorage.getItem("dataLocal")
        const dataLocal = JSON.parse(dataLocalSerializada)
        const fotoLocal = dataLocal.foto
    return(
        <div className="header">
            <h1 className="header-tiulo"> TrackIt </h1>
            <img className="foto-usuario" src={fotoLocal} alt="foto do usuario" width='70px' height='70px'/>
        </div>
    )
}