import { Card, Title } from "../..";
import "./helpTips.style.scss";

const HelpTips = ({ data }) => {
  return (
    <div className="container-helpTips">
      <div className="bgPath3" />
      <center>
        <Title title={"Help & Tips"} />

        <div className="container-card-help">
          {data.map((item) => (
            <Card key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </center>
    </div>
  );
};

export default HelpTips;
