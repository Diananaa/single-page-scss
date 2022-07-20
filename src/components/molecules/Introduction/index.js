import { Desc } from "../..";
import { bitmap } from "../../../assets/Background";
import "./intro.style.scss";
const Introduction = () => {
  return (
    <div className="container-intro">
      <div className="icon-bitmap justify-content-end flex ">
        <img src={bitmap} alt="bitmap" />
      </div>
      <div className="container-intro-text text-right font-semibold">
        <span className=" text-primary">Deffinition; </span>
        <span>
          a practice or exercise to test or improve one's fitness for
          athleticcompetition, ability, or performance to exhaust (something,
          such as amine) by working to devise, arrange, or achieve by resolving
          difficulties. Merriam-Webster.com Dictionary.
        </span>

        <Desc className="brand italic text-secondary" desc={"-weekend team"} />
      </div>
    </div>
  );
};

export default Introduction;
