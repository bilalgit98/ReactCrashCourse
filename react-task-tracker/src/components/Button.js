import PropTypes from "prop-types";
const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
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
};
export default Button;
