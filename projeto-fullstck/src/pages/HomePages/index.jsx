import './style.css';

export default function HomePages() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h2 className="hero-title">
                    Bem-vindo ao sistema de <span>gerenciamento de usuários</span>
                </h2>
                <p className="hero-subtitle">
                    Este sistema foi desenvolvido para facilitar o controle de acessos e usuários. 
                    Aqui você pode cadastrar novas credenciais, visualizar perfis ativos e gerenciar 
                    informações de forma rápida, segura e eficiente.
                </p>
                <div className="hero-buttons">
                    <a href="/cadastro" className="btn-primary">Começar Cadastro</a>
                    <a href="/listar-usuarios" className="btn-secondary">Ver Usuários</a>
                </div>
            </section>
        </div>
    );
}