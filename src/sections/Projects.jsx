import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

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

    const buttonText = allProjectsLoaded ? "Ver Mais no GitHub" : "Ver Mais";
    const githubUrl = "https://github.com/wwwmisla";
    const buttonHref = allProjectsLoaded ? githubUrl : undefined;

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative c-space section-spacing"
            id="projects"
        >
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            {projectsToDisplay.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
            ))}
            {preview && (
                <motion.img
                    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                    src={preview}
                    style={{ x: springX, y: springY }}
                    alt="Project preview"
                />
            )}
            <div className="text-center mt-16 mb-8">
                <a
                    href={buttonHref}
                    onClick={handleShowMoreProjects}
                    target={allProjectsLoaded ? "_blank" : undefined}
                    rel={allProjectsLoaded ? "noopener noreferrer" : undefined}
                    className="inline-block px-8 py-3 text-lg font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-xl cursor-pointer hover:from-purple-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                >
                    {buttonText}
                </a>
            </div>
        </section>
    );
};

export default Projects;