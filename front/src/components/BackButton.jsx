import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const BackButton = (props) => {
  const rute = props.rute;

  return (
    <Link
      to={{ pathname: "/" + rute, keepSearch: true }}
      className="fixed text-md text-violet-600 hover:font-semibold hover:text-violet-900"
    >
      Volver
    </Link>
  );
};

BackButton.propTypes = {
  rute: PropTypes.string,
};

export default BackButton;
