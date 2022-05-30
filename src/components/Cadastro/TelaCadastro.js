import { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './TelaCadastro.css'
import logo from '../../Shared/Group 8.jpg'
import UserContext from '../../contexts/UserContext'
export default function TelaCadastro(){
    const POSTCADASTRO = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
const {email, setEmail, password, setPassword, nome, setNome, foto, setFoto} = useContext(UserContext)
const navigate = useNavigate();
function cadastrar(event){
    event.preventDefault();
    const newUser = {
        email: email,
        name: nome,
        image: foto,
        password: password
    }
    console.log(newUser)
const response = axios.post(POSTCADASTRO, newUser)
response.then(()=>navigate('/habitos'))
response.catch(()=>alert("deu ruim"))
        

}
    
    return(
        <div className='container-cadastro'>
         <img src={logo} alt="logo" width="400px" height="500px" />
        <form>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email" required></input>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder="senha" value={password} type="password" required></input>
        <input onChange={(e)=>setNome(e.target.value)} placeholder="nome" value={nome} required></input>
        <input onChange={(e)=>setFoto(e.target.value)} placeholder="foto" value={foto} required></input>
        <button className="entrar" type='submit' onClick={cadastrar}>Cadastrar</button>
        </form>
        </div>
    )
}