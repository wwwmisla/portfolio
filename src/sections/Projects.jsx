import { useState } from 'react';
import Project from '../components/Project';
import { myProjects } from '../constants';
import { motion, useMotionValue, useSpring } from 'motion/react';

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  const INITIAL_PROJECTS_TO_SHOW = 4;
  const PROJECTS_TO_LOAD_INCREMENT = 4;

  const [visibleProjectsCount, setVisibleProjectsCount] = useState(
    INITIAL_PROJECTS_TO_SHOW
  );

  const projectsToDisplay = myProjects.slice(0, visibleProjectsCount);
  const allProjectsLoaded = visibleProjectsCount >= myProjects.length;

  const handleShowMoreProjects = (e) => {
    if (!allProjectsLoaded) {
      e.preventDefault();
      setVisibleProjectsCount((prevCount) =>
        Math.min(prevCount + PROJECTS_TO_LOAD_INCREMENT, myProjects.length)
      );
    }
  };

  const buttonText = allProjectsLoaded ? 'Ver Mais no GitHub' : 'Ver Mais';
  const githubUrl = 'https://github.com/wwwmisla';
  const buttonHref = allProjectsLoaded ? githubUrl : undefined;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="projects"
    >
      {/* Cabeçalho da Seção com Contador Discreto */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#a67246] font-semibold">
            Portfólio
          </span>
          <h2 className="text-heading">My Selected Projects</h2>
        </div>
        <div className="text-xs text-[#e4d8c5]/60 font-mono">
          Exibindo{' '}
          <span className="text-[#e4d8c5] font-bold">
            {projectsToDisplay.length}
          </span>{' '}
          de {myProjects.length} projetos
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 mb-2 h-[1px] w-full" />

      {/* Lista de Projetos com Animação Suave */}
      {projectsToDisplay.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Project {...project} setPreview={setPreview} />
        </motion.div>
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-xl pointer-events-none w-80 border border-[#a67246]/30 backdrop-blur-md"
          src={preview}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          alt="Project preview"
        />
      )}

      {/* Botão de Carregar Mais / GitHub */}
      <div className="text-center mt-16 mb-8">
        <a
          href={buttonHref}
          onClick={handleShowMoreProjects}
          target={allProjectsLoaded ? '_blank' : undefined}
          rel={allProjectsLoaded ? 'noopener noreferrer' : undefined}
          className="inline-block px-8 py-3 text-lg font-semibold text-center text-[#e4d8c5] bg-gradient-to-r from-[#a67246] to-[#724928] rounded-lg shadow-xl cursor-pointer hover:from-[#c27a3c] hover:to-[#a67246] focus:outline-none focus:ring-2 focus:ring-[#a67246] focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Projects;
