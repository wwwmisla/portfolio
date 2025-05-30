import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const skills = [
        // Base da web
        "html5",
        "css3",
        "javascript",

        // Frameworks e bibliotecas frontend
        "bootstrap",
        "tailwindcss",
        "materialui",
        "react",
        "vitejs",

        // Backend, ferramentas e Linguagens de programação
        "nodejs",
        "npm",
        "python",
        "numpy",
        "tensorflow",
        "java",
        "cplusplus",

        // Banco de dados e sistemas operacionais
        "sqlite",
        "linux",

        // IDEs e documentação
        "visualstudiocode",
        "markdown",

        // Controle de versão
        "git",
        "github",
    ];

    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="duration-200 p-1 rounded-sm hover:scale-110" />
);
