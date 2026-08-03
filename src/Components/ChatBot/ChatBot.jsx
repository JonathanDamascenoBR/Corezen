import React, { useState } from 'react';
import OpenAI from 'openai';
import logo from '../../assets/imgs/LogoChatBot.png'

// Inicializa a IA
const openai = new OpenAI({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1', // Esse é o "truque" para desviar do CORS
    dangerouslyAllowBrowser: true
});

function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Modos: 'ia' (padrão) ou 'human'
    const [chatMode, setChatMode] = useState('ia');

    // Link do WhatsApp
    const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá,%20preciso%20de%20atendimento%20humano";

    // Palavras-chave para acionar atendimento humano
    const HUMAN_KEYWORDS = ['humano', 'atendente', 'suporte', 'garantia', 'falar com alguém', 'falar com humano', 'ajuda humana'];

    // Palavras-chave para RETORNAR à IA
    const IA_KEYWORDS = ['ia', 'bot', 'robô'];

    // Função para reativar a IA manualmente
    const handleResetToIA = () => {
        setChatMode('ia');
        setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: 'Prontinho! Estou de volta. Qual sua dúvida sobre hardware?' }
        ]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');

        // Adiciona a mensagem do usuário
        const newMessages = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);

        const isAskingForIA = IA_KEYWORDS.some(keyword =>
            userMessage.toLowerCase().includes(keyword)
        );

        if (chatMode === 'human' && isAskingForIA) {
            setChatMode('ia');
            setIsLoading(true);
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    { role: 'assistant', content: 'Modo IA reativado! Como posso ajudar com suas peças?' }
                ]);
                setIsLoading(false);
            }, 500);
            return;
        }

        const isAskingForHuman = HUMAN_KEYWORDS.some(keyword =>
            userMessage.toLowerCase().includes(keyword)
        );

        if (isAskingForHuman || chatMode === 'human') {
            setChatMode('human');
            setIsLoading(true);

            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        isHumanInvite: true, 
                        content: 'Entendido! Para falar diretamente com um especialista, clique no botão abaixo para abrir o WhatsApp:'
                    }
                ]);
                setIsLoading(false);
            }, 600);
            return;
        }

        // Parte da resposta da IA
        setIsLoading(true);
        try {
            const response = await openai.chat.completions.create({
                model: "llama-3.1-8b-instant",
                messages: [
                    {
                        role: "system",
                        content: `Você é um assistente virtual focado em hardware e montagem de computadores.
            Sua função é tirar dúvidas sobre compatibilidade de peças, refrigeração e gargalos.
            O site onde você está NÃO vende peças. Sugira sites confiáveis do varejo brasileiro.
            REGRA ABSOLUTA: Seja extremamente sucinto e direto ao ponto. Responda em no máximo 2 parágrafos curtos. Use bullet points sempre que for listar peças ou dicas. Evite introduções e saudações longas.`
                    },
                    ...newMessages
                ],
                temperature: 0.3,
                max_tokens: 250,
            });

            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: response.choices[0].message.content }
            ]);
        } catch (error) {
            console.error("Erro ao chamar a IA:", error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Desculpe, ocorreu um erro ao conectar com o assistente.' }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end">

            {/* Janela do Chat */}
            {isOpen && (
                <div className="w-[400px] h-[500px] bg-slate-900 border border-cyan-300 rounded-lg shadow-[0_0_20px_rgba(0,210,255,0.3)] mb-4 flex flex-col overflow-hidden">

                    <div className="bg-slate-950 text-white p-4 flex justify-between items-center border-b border-slate-700 font-bold text-lg">
                        <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${chatMode === 'human' ? 'bg-emerald-400' : 'bg-cyan-300'} animate-pulse`}></span>
                            <span>{chatMode === 'human' ? 'Consultor Técnico' : 'Assistente Virtual'}</span>
                        </div>
                        <button
                            className="bg-transparent text-cyan-300 border-none text-2xl cursor-pointer hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            &times;
                        </button>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
                        {messages.length === 0 && (
                            <div className="self-start max-w-[85%] p-3 rounded-md text-sm leading-relaxed bg-slate-950 text-white border border-[#00d2ff]/30">
                                Olá! Como posso te ajudar com a escolha das suas peças de hardware hoje?
                            </div>
                        )}

                        {messages.map((m, index) => (
                            <div
                                key={index}
                                className={`max-w-[85%] p-3 rounded-md text-sm leading-relaxed ${m.role === 'user'
                                    ? 'self-end bg-cyan-300 text-black font-medium'
                                    : 'self-start bg-slate-950 text-white border border-[#00d2ff]/30'
                                    }`}
                            >
                                <div style={{ whiteSpace: 'pre-wrap' }}>{m.content}</div>

                                {/* BOTÃO DO WHATSAPP */}
                                {m.isHumanInvite && (
                                    <div className="mt-3 flex flex-col gap-2">
                                        <a
                                            href={WHATSAPP_LINK}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded transition-colors no-underline shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                                        >
                                            <span>💬 Abrir WhatsApp</span>
                                        </a>

                                        <button
                                            onClick={handleResetToIA}
                                            className="w-full py-1.5 px-3 bg-transparent border border-[#00d2ff]/50 text-[#00d2ff] hover:bg-[#00d2ff]/10 font-medium text-xs rounded transition-colors cursor-pointer"
                                        >
                                            🤖 Voltar a falar com a IA
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <span className="text-[#00d2ff] text-sm self-start animate-pulse">
                                {chatMode === 'human' ? 'Redirecionando...' : 'Analisando...'}
                            </span>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="flex p-3 bg-slate-950 border-t border-slate-700">
                        <input
                            value={input}
                            placeholder={chatMode === 'ia' ? "Digite sua dúvida de hardware..." : "Fale com o suporte..."}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-slate-950 text-white border border-gray-700 p-2 rounded focus:outline-none focus:border-cyan-300 transition-colors text-sm"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-cyan-300 text-black border-none px-4 ml-2 rounded font-bold cursor-pointer hover:bg-cyan-300 transition-colors disabled:opacity-50"
                        >
                            Enviar
                        </button>
                    </form>

                </div>
            )}

            {/* Botão Flutuante */}
            <button
                className="group relative w-[80px] h-[80px] rounded-full bg-slate-900 flex justify-center items-center cursor-pointer  shadow-[0_0_15px_rgba(0,210,255,0.5)] transition-all duration-200 hover:scale-105 border border-cyan-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="absolute right-[95px] w-max px-4 py-2 bg-slate-950 text-white text-sm font-medium border border-[#00d2ff]/50 rounded-lg shadow-[0_0_10px_rgba(0,210,255,0.2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                    Dúvidas? Pergunte à IA!
                </span>
                <img src={logo} alt="" className='w-15' />
            </button>
        </div>
    )
}

export default ChatBot