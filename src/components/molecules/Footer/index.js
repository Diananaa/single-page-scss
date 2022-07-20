import "./footer.style.scss";
const Footer = () => {
  return (
    <footer className="flex justify-between text-secondary items-center">
      <div className="flex text-xs">
        <p className=" font-bold">wknd@</p>
        <p>2020</p>
      </div>
      <p className="outline versi font-light">alpha version 0.1</p>
    </footer>
  );
};

export default Footer;
