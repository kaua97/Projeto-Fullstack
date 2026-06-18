import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
        <header className='header' >
            <h1>Projeto Fullstack -Sistema de gerenciamento de usuários</h1>

            <nav>
                <Link to='/'>Início</Link>
                <Link to='/cadastro'>Cadastrar</Link>
                <Link to='/listar-usuarios'>Listar de usuarios</Link>
    
            </nav>
        </header>

    )
}