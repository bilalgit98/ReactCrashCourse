import PropTypes from "prop-types";
const header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <button className="btn">Add</button>
    </header>
  );
};

header.defaultProps = {
  title: "Task Tracker",
};

header.propTypes = {
  title: PropTypes.string,
};

export default header;
