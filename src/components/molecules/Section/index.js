import { Desc, Title } from "../..";
import "./section.style.scss";
const Section = ({ title, desc }) => {
  return (
    <section className="text-secondary ">
      <Title title={title} />
      <Desc desc={desc} />
    </section>
  );
};

export default Section;
