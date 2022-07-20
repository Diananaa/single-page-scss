import BtnNext from "../Button/BtnNext";
import "./card.style.scss";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} className="image-card" />
      <div className="container-title-card" />
      <div className="card-title font-bold text-base">
        <p>{title}</p>
        <BtnNext />
      </div>
    </div>
  );
};

export default Card;
