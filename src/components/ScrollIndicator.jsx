import { motion } from 'motion/react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center select-none">
      <a
        href="#about"
        className="flex flex-col items-center group cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-400 mb-2 group-hover:text-white transition-colors">
          Role para baixo
        </span>
        <motion.div
          className="flex flex-col items-center text-lavender"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-base font-bold leading-none">↓</span>
          <span className="text-base font-bold leading-none -mt-2 opacity-50">
            ↓
          </span>
        </motion.div>
      </a>
    </div>
  );
};

export default ScrollIndicator;
