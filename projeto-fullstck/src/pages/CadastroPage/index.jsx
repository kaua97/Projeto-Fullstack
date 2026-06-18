import { useState } from 'react'; // 1. Corrigido: Importação do useState adicionada
import { toast } from 'react-toastify';
import './style.css';
import api from '../../services/api';

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaenviando, setEstaenviando] = useState(false); // Corrigido para iniciar como false (booleano)
   
    // Limpa os campos do formulário.
    function limparCamposFormulario() {
        setNome('');  // 3. Corrigido: Letra maiúscula no N
        setEmail(''); // 3. Corrigido: Letra maiúscula no E
        setSenha(''); // 3. Corrigido: Letra maiúscula no S
    }
    
    async function envioDoFormulario(event) {
        // Evitar que a página seja recarregada automaticamente.
        event.preventDefault();
        setEstaenviando(true);

        const dadosdoFormulario = { nome, email, senha };

        try {
            // Tenta cadastrar o usuário na API.
            const resposta = await api.post('/usuarios', dadosdoFormulario);
            // se der certo.
            toast.success(resposta.data.mensagem); // 3. Corrigido: resposta com 'o'
            limparCamposFormulario();
        } catch (error) {
            // se der errado.
            // 3. Corrigido: de 'erro' para 'error' e de 'resposta' para 'response' (padrão do Axios)
            const mensagemDoServidor = error?.response?.data?.mensagem || "Erro ao cadastrar.";
            toast.error(mensagemDoServidor);
        } finally {
            // Executa dando certo ou errado.
            setEstaenviando(false);
        }
    }

    return (
        <div className='cadastro-page'>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={envioDoFormulario}>
                <div className='grupo-form'>
                    <label htmlFor="campo-nome">Nome</label>
                    {/* 2. Corrigido: Tag input fechada corretamente no final */}
                    <input 
                        type="text"
                        id='campo-nome'
                        placeholder='Kaua Victor'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} 
                    />
                </div>

                {/* Dica: Notei que faltava o campo visual de Email na sua tela, adicionei aqui para você */}
                <div className='grupo-form'>
                    <label htmlFor="campo-email">E-mail</label>
                    <input 
                        type="email"
                        id='campo-email'
                        placeholder='seu-email@provedor.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
            
                <div className='grupo-form'>
                    <label htmlFor="campo-senha">Senha</label>
                    {/* 2. Corrigido: Tag input fechada corretamente no final */}
                    <input 
                        type="password"
                        id='campo-senha'
                        placeholder='Digite sua senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>

                <button type='submit' disabled={estaenviando}>
                    {estaenviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}