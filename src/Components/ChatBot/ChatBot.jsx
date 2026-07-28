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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');

        // Adiciona a mensagem do usuário
        const newMessages = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            // Chamada da API 
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
            });

            // Puxa a resposta exata do ChatGPT
            const botReply = response.choices[0].message.content;

            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: botReply }
            ]);
        } catch (error) {
            console.error("Erro ao chamar a OpenAI:", error);
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
                <div className="w-[350px] h-[500px] bg-slate-900 border border-cyan-300 rounded-lg shadow-[0_0_20px_rgba(0,210,255,0.3)] mb-4 flex flex-col overflow-hidden">

                    <div className="bg-slate-950 text-white p-4 flex justify-between items-center border-b border-slate-700 font-bold text-lg">
                        <span>Consultor Técnico</span>
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
                                Olá, eu sou o Corezinho! <br /> 
                                Qual a sua dúvida sobre compatibilidade de peças ou configurações de setup?
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
                            </div>
                        ))}

                        {isLoading && (
                            <span className="text-cyan-300text-sm self-start animate-pulse">
                                Analisando...
                            </span>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="flex p-3 bg-slate-950 border-t border-slate-700">
                        <input
                            value={input}
                            placeholder="Digite sua dúvida..."
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
                className="group relative w-[80px] h-[80px] rounded-full bg-slate-900 flex justify-center items-center cursor-pointer border-none shadow-[0_0_15px_rgba(0,210,255,0.5)] transition-all duration-200 hover:scale-105"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="absolute right-[95px] w-max px-4 py-2 bg-slate-950 text-white text-sm font-medium border border-[#00d2ff]/50 rounded-lg shadow-[0_0_10px_rgba(0,210,255,0.2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                    Dúvidas? Fale com o Corezinho!
                </span>

                <img src={logo} alt="" className='w-15' />
            </button>
        </div>
    )
}

export default ChatBot