import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  colour: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  colour: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
