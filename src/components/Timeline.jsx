'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 20%', 'end 80%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div className="c-space section-spacing text-[#e4d8c5]" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-[#18191a] border border-[#18191a]/40 shadow-md">
                <div className="w-4 h-4 p-2 border rounded-full bg-[#2c3635] border-[#a67246]" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-[#e4d8c5]">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-[#d1b187]">{item.title}</h3>
                <h3 className="text-3xl text-[#e4d8c5]/60">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-bold text-left text-[#e4d8c5] md:hidden">
                <h3>{item.date}</h3>
                <h3 className="text-lg text-[#d1b187] font-semibold">
                  {item.title}
                </h3>
                <h3 className="text-sm text-[#e4d8c5]/60">{item.job}</h3>
              </div>
              {item.contents.map((content, idx) => (
                <p
                  className="mb-3 font-normal text-[#d1b187]/90 text-sm md:text-base leading-relaxed"
                  key={idx}
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Linha de fundo cinza/marrom total */}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#43362a] to-transparent to-[99%]"
        >
          {/* Linha de progresso animada */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#cc6f1d] via-[#a67246] to-transparent from-[0%] via-[10%] rounded-full shadow-[0_0_12px_#a67246]"
          />
        </div>
      </div>
    </div>
  );
};
