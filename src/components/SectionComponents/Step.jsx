import PropTypes from "prop-types";

const Step = ({ step, title, description, note }) => (
  <div className="step">
    <p>{step}</p>
    <div className="step_div">
      <h3 className="step_div_h3">{title}</h3>
      <p className="step_div_p1">{description}</p>
      <p className="step_div_p2">{note}</p>
    </div>
  </div>
);

Step.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired, // これを変更
  note: PropTypes.string,
};

export default Step;
