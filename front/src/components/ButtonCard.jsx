import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

const ButtonCard = (props) => {
  const id = props.id;
  const active = props.active;
  return (
    <Link to={`/productos/${id}`}>
      {active == 1 ? (
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-center text-white rounded-lg outline-none bg-violet-700 hover:bg-violet-800 focus:outline-none "
        >
          <span className="mr-1">Disponible</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </button>
      ) : (
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-violet-700 hover:bg-violet-800 disabled:opacity-40"
          disabled
        >
          <span className="mr-1">No Disponible</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
        </button>
      )}
    </Link>
  );
};

ButtonCard.propTypes = {
  id: PropTypes.number,
  active: PropTypes.number,
};

export default ButtonCard;
