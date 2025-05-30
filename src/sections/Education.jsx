import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { education } from "../constants";

const firstRow = education.slice(0, education.length / 2);
const secondRow = education.slice(education.length / 2);

const EducationCard = ({ title, institution, date, type, body, img }) => {
    return (
        <figure className={twMerge("relative h-full w-92 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation hover:scale-[1.015] hover:shadow-lg")}>
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full bg-white/10"
                    width="32"
                    height="32"
                    alt="icon"
                    src={img}
                />
                <div className="flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {title}
                    </figcaption>
                    <p className="text-xs font-medium text-white/60">{institution}</p>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex flex-row items-center justify-between text-white/60 text-xs font-medium">
                    <p>📅 {date}</p>
                    <p>
                        <span>
                            {type === "Graduação" && "🎓 Graduação"}
                            {type === "Curso Técnico" && "💻 Curso Técnico"}
                            {type === "Formação Complementar" && "📘 Formação Complementar"}
                        </span>
                    </p>
                </div>
                <blockquote className="mt-2 text-sm text-white/90">{body}</blockquote>
            </div>
        </figure>
    );
};

const Education = () => {
    return (
        <section className="items-start mt-25 md:mt-35 c-space" id="education">
            <h2 className="text-heading">Education</h2>
            <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((education) => (
                        <EducationCard key={education.title} {...education} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((education) => (
                        <EducationCard key={education.title} {...education} />
                    ))}
                </Marquee>
                <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
                <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
            </div>
        </section>
    );
};

export default Education;