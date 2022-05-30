import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
export default function Header(){
    const {foto} = useContext(UserContext);
    return(
        <div className="header">
            <h1 className="header-tiulo"> TrackIt </h1>
            <img className="foto-usuario" src={foto} alt="foto do usuario" width='70px' height='70px'/>
        </div>
    )
}