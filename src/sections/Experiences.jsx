import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
    return (
        <section className="w-full" id="work">
            <Timeline data={experiences} />
        </section>
    );
};

export default Experiences;
