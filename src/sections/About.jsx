import { TypeAnimation } from 'react-type-animation';
import { useRef } from 'react';
import Card from '../components/Card';
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing" id="about">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]" />
                    <div className="z-10">
                        <p className="headtext">
                            <TypeAnimation
                                sequence={[
                                    "Hi, I'm Misla Wislaine", // Texto final
                                    1000, // Tempo de pausa após exibir
                                ]}
                                wrapper="span"
                                cursor={true}
                                speed={10} // Ajuste a velocidade (1-99)
                                style={{ display: 'inline-block' }}
                            />
                        </p>
                        <p className="subtext">Nos últimos meses, tenho desenvolvido ativamente minhas habilidades em frontend e backend para construir softwares dinâmicos e aplicações robustas.</p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'>Código é Arte</p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="React"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="Tailwindcss"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                            text="OpenCV"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            text="Matplotlib"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="Numpy"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/logos/javascript.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/logos/java.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-25deg", top: "5%", left: "10%" }}
                            image="assets/logos/python.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-25deg", top: "5%", left: "70%" }}
                            image="assets/logos/cplusplus.svg"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3">
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>Fuso Horário</p>
                        <p className='subtext'>Estou baseada em Marte e aberta a trabalhos remotos em qualquer lugar do mundo. 🌍🚀</p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                        <p className="text-center headtext">
                            Gostaria de iniciar um projeto juntos?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headText">Teck Stack</p>
                        <p className="subtext">
                            Tive acesso a diversas linguagens, frameworks e ferramentas,
                            utilizando-as para desenvolver aplicações funcionais e bem estruturadas.
                        </p>
                    </div>
                    <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;