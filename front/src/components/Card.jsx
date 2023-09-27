import { PropTypes } from "prop-types";
import imagen from "../assets/producto1.svg";
const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
          {props.name}
        </h5>
      </a>
      <img src={imagen} alt="" srcSet="" className="h-48" />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {props.price}
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {}
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
