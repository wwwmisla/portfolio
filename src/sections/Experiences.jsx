import { Timeline } from '../components/Timeline';
import { experiences } from '../constants';

const Experiences = () => {
  return (
    <section className="w-full text-[#e4d8c5]" id="work">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
