import UserContext from './contexts/UserContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import './Shared/reset.css'
import TelaLogin from './components/Login/TelaLogin.js'
import TelaCadastro from './components/Cadastro/TelaCadastro';
import TelaHabito from './components/Habito/TelaHabito.js'
import TelaHoje from './components/Hoje/TelaHoje';
import TelaHistorico from './components/Historico/TelaHistorico.js';
function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nome, setNome] = useState("")
  const [foto, setFoto] = useState("")
  const [token, setToken] = useState("")
  const [listaHabitos, setListaHabitos] = useState([])
  const [listaSemana, setListaSemana] = useState([])
  const [habitosDeHoje, setHabitosDeHoje] = useState([])
  const [habitoFeito, setHabitoFeito] = useState()
  const [dadosToken, setDadosToken] = useState()
  const [listaCalendarioSemana, setListaCalendarioSemana] = useState([
    { id: 1, dia: "D", selecionado: false },
    { id: 2, dia: "S", selecionado: false },
    { id: 3, dia: "T", selecionado: false },
    { id: 4, dia: "Q", selecionado: false },
    { id: 5, dia: "Q", selecionado: false },
    { id: 6, dia: "S", selecionado: false },
    { id: 7, dia: "S", selecionado: false }])

 

  return (
    <div className='pagina'>
    <BrowserRouter>
      <UserContext.Provider value={{ email, 
        setEmail, 
        password, setPassword, 
        nome, setNome, 
        foto, setFoto, 
        token, setToken, 
        listaSemana, setListaSemana,
         listaCalendarioSemana, setListaCalendarioSemana , 
         listaHabitos, setListaHabitos, 
         habitosDeHoje, setHabitosDeHoje, 
         habitoFeito, setHabitoFeito,
         dadosToken, setDadosToken}}>
        <Routes>
          <Route path='/' element={<TelaLogin />} />
          <Route path='/cadastro' element={<TelaCadastro />} />
          <Route path='/habitos' element={<TelaHabito />} />
          <Route path='/hoje' element={<TelaHoje />} />
          <Route path='/historico' element={<TelaHistorico />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>

    </div>
  );
}

export default App;
