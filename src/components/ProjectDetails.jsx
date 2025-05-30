import { motion } from "motion/react";

const ProjectDetails = ({
    title,
    description,
    subDescription,
    image,
    tags,
    href,
    closeModal,
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm px-4 py-6">
            <motion.div
                className="relative w-full max-w-2xl max-h-[90vh] flex flex-col border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <button
                    onClick={closeModal}
                    className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10 hover:cursor-pointer"
                >
                    <img src="assets/close.svg" className="w-6 h-6" />
                </button>

                <img src={image} alt={title} className="w-full rounded-t-2xl max-h-60 object-cover" />

                <div className="flex-1 min-h-0 overflow-y-auto p-5">
                    <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                    <p className="mb-3 font-normal text-neutral-400">{description}</p>
                    {subDescription.map((subDesc, index) => (
                        <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
                    ))}

                    <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                        <div className="flex gap-3 flex-wrap">
                            {tags.map((tag) => (
                                <img
                                    key={tag.id}
                                    src={tag.path}
                                    alt={tag.name}
                                    className="rounded-lg size-10 hover-animation"
                                />
                            ))}
                        </div>
                        <div className="flex gap-1.5">
                            <a
                                href={href.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                            >
                                GitHub
                                <img src="assets/arrow-up.svg" className="size-4" />
                            </a>
                            <p className="font-normal text-neutral-400">|</p>
                            <a
                                href={href.application}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                            >
                                Acessar Site
                                <img src="assets/arrow-up.svg" className="size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default ProjectDetails;
