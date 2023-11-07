import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

const ButtonCard = (props) => {
  const id = props.id;
  const active = props.active;
  return (
    <Link
      to={`/products/${id}`}
      className={
        active == 1
          ? "px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          : "pointer-events-none px-3 py-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-300 dark:hover:bg-blue-300 dark:focus:ring-blue-300"
      }
    >
      <span className="mr-1">
        {active == 1 ? "Disponible" : "No disponible"}
      </span>
      <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
    </Link>
  );
};

ButtonCard.propTypes = {
  id: PropTypes.number,
  active: PropTypes.number,
};

export default ButtonCard;
