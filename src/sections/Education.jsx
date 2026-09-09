import { twMerge } from 'tailwind-merge';
import Marquee from '../components/Marquee';
import { education } from '../constants';

const firstRow = education.slice(0, education.length / 2);
const secondRow = education.slice(education.length / 2);

const EducationCard = ({ title, institution, date, type, body, img }) => {
  return (
    <figure
      className={twMerge(
        'relative h-full w-92 cursor-pointer overflow-hidden rounded-xl border p-4 border-[#a67246]/20 bg-gradient-to-r from-[#2c3635] to-[#43362a] hover:from-[#724928] hover:to-[#a67246] hover-animation hover:scale-[1.015] hover:shadow-[0_4px_20px_rgba(166,114,70,0.2)] transition-all duration-300'
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img
          className="rounded-full bg-white/10"
          width="36"
          height="36"
          alt="icon"
          src={img}
        />
        <div className="flex-col">
          <figcaption className="text-sm font-semibold text-[#e4d8c5]">
            {title}
          </figcaption>
          <p className="text-xs font-medium text-[#d1b187]/80">{institution}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row items-center justify-between text-[#d1b187]/70 text-xs font-medium border-b border-white/5 pb-2 mb-2">
          <p>{date}</p>
          <p>
            <span className="bg-[#18191a]/40 px-2 py-0.5 rounded-md border border-[#a67246]/20 text-[#e4d8c5]">
              {type === 'Graduação' && 'Graduação'}
              {type === 'Curso Técnico' && 'Curso Técnico'}
              {type === 'Formação Complementar' && 'Formação Complementar'}
            </span>
          </p>
        </div>
        <blockquote className="mt-2 text-sm text-[#e4d8c5]/90 leading-relaxed">
          {body}
        </blockquote>
      </div>
    </figure>
  );
};

const Education = () => {
  return (
    <section className="items-start mt-25 md:mt-35 c-space" id="education">
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-[#a67246] font-semibold">
          Trajetória Acadêmica
        </span>
        <h2 className="text-heading">Education</h2>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </section>
  );
};

export default Education;
