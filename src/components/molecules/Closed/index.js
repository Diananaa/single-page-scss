import { Desc, Title } from "../..";
import { imgBitmapBottom } from "../../../assets/Background";
import "./closed.style.scss";

const Closed = () => {
  return (
    <div className="container-closed text-secondary">
      <div className="section-closed">
        <Title title={"You’re all set."} />
        <Desc
          desc={
            "The wise man therefore always holds in these matters to this principle of selection."
          }
        />
      </div>
      <img src={imgBitmapBottom} alt="icon" />
    </div>
  );
};

export default Closed;
