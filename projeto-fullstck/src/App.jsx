import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import HomePages from './pages/HomePages'
import CadastroPage from './pages/CadastroPage'
import ListaUsuariosPage from './pages/ListaUsuariosPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      

      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/listar-usuarios" element={<ListaUsuariosPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App