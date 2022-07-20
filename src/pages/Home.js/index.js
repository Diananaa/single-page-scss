import React, { useEffect, useState } from "react";
import {
  Closed,
  Footer,
  GetStarted,
  Header,
  HelpTips,
  Introduction,
  Section,
  Testimonial,
} from "../../components";
import axios from "axios";

const Home = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [helpTips, setHelpTips] = useState([]);

  useEffect(() => {
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => {
        setTestimonial(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/help-tips")
      .then((res) => {
        setHelpTips(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <body>
      <Header />
      <GetStarted />
      <Introduction />
      <Testimonial data={testimonial} />
      <Section
        title={"POV"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
        }
      />
      <Section
        title={"Resource"}
        desc={
          "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
        }
      />
      <HelpTips data={helpTips} />
      <Closed />
      <Footer />
    </body>
  );
};

export default Home;
