import { Globe } from '../components/Globe';
import { motion } from 'motion/react';

const GridThree = () => {
  return (
    <div className="grid-default-color grid-3 relative overflow-hidden">
      {/* Conteúdo de Texto */}
      <div className="z-10 w-[55%] md:w-[50%] flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a67246] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#c27a3c]"></span>
            </span>
            <span className="text-xs uppercase tracking-wider text-[#a67246] font-semibold">
              Base Operacional
            </span>
          </div>
          <p className="headtext">Fuso Horário & Local</p>
          <p className="subtext">
            Estou baseada em Marte (ou operando a partir do RN/Brasil 🌴) e
            aberta a trabalhos remotos para o mundo todo. 🌍🚀
          </p>
        </div>

        {/* Badge Dinâmico / Interativo */}
        <motion.div
          className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18191a]/80 border border-[#a67246]/30 text-xs text-[#e4d8c5] w-fit shadow-md backdrop-blur-sm"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span>🛸 Pronta para novos desafios</span>
        </motion.div>
      </div>

      {/* Globo Interativo */}
      <figure className="absolute -right-[10%] md:left-[35%] top-[5%] pointer-events-auto opacity-90 hover:opacity-100 transition-opacity">
        <Globe />
      </figure>

      {/* Elemento Dinâmico Flutuante (Foguete/Satélite arrastável) */}
      <motion.div
        className="absolute right-6 top-6 cursor-grab active:cursor-grabbing z-20 text-2xl select-none"
        drag
        dragConstraints={{ top: -10, left: -20, right: 10, bottom: 20 }}
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        title="Arraste-me!"
      >
        🛰️
      </motion.div>
    </div>
  );
};

export default GridThree;
