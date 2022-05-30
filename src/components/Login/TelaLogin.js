import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../contexts/UserContext'
import "./TelaLogin.css"
import logo from '../../Shared/Group 8.jpg'
export default function TelaLogin(){
    const {email, setEmail, password, setPassword, setToken, token, setFoto, setDadosToken} = useContext(UserContext)
    const navigate = useNavigate();
    function gerarToken(data){
        setToken(data.token)
        setFoto(data.image) 
        const dataStorage = {token:data.token, foto:data.image}
        const dataSerializada = JSON.stringify(dataStorage)
        localStorage.setItem("dataLocal", dataSerializada)
        const dataLocalSerializada = localStorage.getItem("dataLocal")
        const dataLocal = JSON.parse(dataLocalSerializada)
        const tokenLocal = dataLocal.token
        
        navigate('/habitos')
    }
    function login(event){
        event.preventDefault();
        const userlogin = {
            email,
            password
        }   

        const response = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', userlogin)
        response.then(({ data })=> gerarToken(data))
        
    }
    function irParaTelaCadastro(){
        navigate('/cadastro')
    }
   
    return(
        <>
        <div className="container-login">
        <img src={logo} alt="logo" width="400px" height="500px" />
        <form>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email" type="email" required></input>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder="senha" value={password} type="password" required></input>
        <button className="entrar" onClick={login}>Entrar</button>
        </form>
        <button className='irParaCadastro' onClick={()=>irParaTelaCadastro}>
        Não tem uma conta? Cadastre-se!
        </button>
        </div>
        
        </>
    )
}