const Desc = ({ desc, ...restProps }) => {
  return (
    <div className="text-base" {...restProps}>
      {desc}
    </div>
  );
};

export default Desc;
