const Title = (props) => {
  return (
    <>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
    </>
  );
};

export default Title;
