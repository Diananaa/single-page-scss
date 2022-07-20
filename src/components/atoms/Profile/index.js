import { imgProfile } from "../../../assets";
import "../Profile/profile.style.scss";

const Profile = () => {
  return (
    <div className="flex text-black profile">
      <img src={imgProfile} alt="my profile" width="33px" height="33px" />
      <div className="container-profile">
        <p className="text-xs">Good Morning</p>
        <p className="font-semibold text-base">Fellas</p>
      </div>
    </div>
  );
};

export default Profile;
