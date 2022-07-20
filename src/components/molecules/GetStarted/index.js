import { imgBitmap } from "../../../assets/Images";
import BtnGetStarted from "../../atoms/Button/BtnGetStarted";
import "./getStarted.style.scss";
const GetStarted = () => {
  return (
    <>
      <div className="text-secondary container">
        <center>
          <div className="container-title">
            <p className="text-secondary font-bold title-getStarted">
              WORK FROM HOME
            </p>
            <p className="italic text-secondary desc-getStarted">
              Stay active with a little workout.
            </p>
          </div>
          <div className="btn-get-started-position">
            <BtnGetStarted />
          </div>
          <img src={imgBitmap} alt="Bitmap" className="img-bitmap" />
        </center>
      </div>
    </>
  );
};

export default GetStarted;
