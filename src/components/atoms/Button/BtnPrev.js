import { iconPrev } from "../../../assets";

const BtnPrev = ({ ...resPros }) => {
  return (
    <button className="btn-next" {...resPros}>
      <img src={iconPrev} alt="icon" />
    </button>
  );
};

export default BtnPrev;
