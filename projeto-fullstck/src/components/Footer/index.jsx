import './style.css';

export default function Footer() {
    return (
        <footer className='footer' >

            <p>
                &copy: {new Date().getFullYear()} - Todos os direitos reservados
                <br />
                Senai -Bahia - 2026
            </p>

        </footer>
    )
}