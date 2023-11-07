import { PropTypes } from "prop-types";
import imagen from "../assets/lilo.jpg";
import ButtonCard from "./ButtonCard";
const Card = (props) => {
  const id = props.id;
  const active = props.active;

  return (
    <div className="flex flex-col items-center justify-center max-w-sm gap-2 p-6">
      <h5 className="text-xl font-bold tracking-tight text-gray-900 capitalize dark:text-gray-900">
        {props.name}
      </h5>

      <img
        src={imagen}
        alt={props.name}
        className="w-full rounded-b-none rounded-xl"
      />
      <p className="text-lg font-semibold text-gray-700 ">${props.price}</p>
      <p>{props.detail}</p>
      <ButtonCard id={id} active={active} />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  detail: PropTypes.string,
  active: PropTypes.number,
};

export default Card;
