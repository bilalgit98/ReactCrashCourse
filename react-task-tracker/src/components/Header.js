const header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

header.defaultProps = {
  title: "Title Default Props",
};

export default header;
