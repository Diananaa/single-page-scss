import { iconNext } from "../../../assets";
import "./button.style.scss";

const BtnNext = ({ ...resPros }) => {
  return (
    <button className="btn-next" {...resPros}>
      <img src={iconNext} alt="icon" />
    </button>
  );
};

export default BtnNext;
