import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const GridFour = () => {
  const initialMessage = {
    text: 'Bem-vindo(a) ao terminal v1.0.0. Digite "help" para ver os comandos disponíveis.',
    type: 'system',
  };

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([initialMessage]);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      if (!cmd) return;

      let response = '';
      if (cmd === 'help') {
        response = 'Comandos disponíveis: help, stack, contato, clear';
      } else if (cmd === 'stack') {
        response =
          'Stack cotidiana: Angular, Spring Boot, Node.js, Docker, MongoDB & PostgreSQL.';
      } else if (cmd === 'contato') {
        response =
          'E-mail: wwwmisla144@gmail.com | Seção de contato logo abaixo!';
      } else if (cmd === 'clear') {
        setHistory([initialMessage]);
        setInputVal('');
        return;
      } else {
        response = `Comando não reconhecido: "${cmd}". Digite "help" para ajuda.`;
      }

      setHistory((prev) => [
        ...prev,
        { text: `misla@cosmos:~$ ${inputVal}`, type: 'user' },
        { text: response, type: 'output' },
      ]);
      setInputVal('');
    }
  };

  return (
    <div className="grid-special-color grid-4 flex flex-col justify-between relative overflow-hidden font-mono h-full">
      {/* Cabeçalho estilo Terminal */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80"></span>
          <span className="size-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="size-2.5 rounded-full bg-green-500/80"></span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-[#e4d8c5]/60">
          interactive-shell.sh
        </span>
      </div>

      {/* Janela de Histórico de Mensagens */}
      <div
        ref={scrollContainerRef}
        className="my-2 flex flex-col gap-1.5 text-xs overflow-y-auto max-h-[110px] pr-1"
      >
        {history.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-pretty ${
              item.type === 'user'
                ? 'text-[#e4d8c5] font-semibold'
                : item.type === 'system'
                  ? 'text-[#e4d8c5]/60 italic'
                  : 'text-[#e4d8c5] bg-black/20 p-1.5 rounded border border-white/5'
            }`}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Linha de Comando Real (Input) */}
      <div className="flex items-center gap-2 pt-1 border-t border-white/10 text-xs">
        <span className="text-[#12100e] font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="digite um comando..."
          className="w-full bg-transparent text-[#e4d8c5] placeholder-[#12100e]/50 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default GridFour;
