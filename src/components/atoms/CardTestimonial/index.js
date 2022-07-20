import "./CardTestimonial.style.scss";
const CardTestimonial = ({ by, testimony }) => {
  return (
    <div className="container-card-testimonial">
      <div className="box-card-testimonial">
        <p className="text-lg font-extrabold">{by}</p>
        <p className="text-xs">{testimony}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
