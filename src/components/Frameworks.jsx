import { OrbitingCircles } from './OrbitingCircles';
import {
  SiAngular,
  SiReact,
  SiSpring,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiPython,
  SiGit,
  SiLinux,
  SiVite,
  SiMui,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export function Frameworks() {
  const skills = [
    { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Spring', icon: <SiSpring className="text-green-500" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="text-orange-500" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
    { name: 'Git', icon: <SiGit className="text-orange-600" /> },
    { name: 'Linux', icon: <SiLinux className="text-white" /> },
    { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
    { name: 'Material UI', icon: <SiMui className="text-blue-400" /> },
  ];

  const orbitOne = skills.slice(0, Math.ceil(skills.length / 2));
  const orbitTwo = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {orbitOne.map((skill, index) => (
          <Icon key={index} icon={skill.icon} name={skill.name} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {orbitTwo.map((skill, index) => (
          <Icon key={index} icon={skill.icon} name={skill.name} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ icon, name }) => (
  <div
    title={name}
    className="duration-200 p-2 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:scale-125 hover:bg-white/10 shadow-md cursor-pointer"
  >
    {icon}
  </div>
);
