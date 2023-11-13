import { PropTypes } from "prop-types";
import imagen from "../assets/lilo.jpg";
import ButtonCard from "./ButtonCard";
const Card = (props) => {
  const id = props.id;
  const active = props.active;

  return (
    <div className="flex flex-col items-center h-full max-w-sm gap-3 p-6 ">
      <img
        src={imagen}
        alt={props.name}
        className="w-11/12 rounded-b-none rounded-xl"
      />
      <div className="flex justify-between w-full gap-5 px-5">
        <h5 className="text-xl font-semibold text-gray-900 uppercase ">
          {props.name}
        </h5>
        <p className="text-xl font-medium text-gray-600 ">${props.price}</p>
      </div>
      <p className="w-full h-20 px-5 overflow-y-scroll text-base text-justify text-ellipsis no-scrollbar">
        {props.detail}
      </p>
      <div className="flex justify-center w-full mt-3">
        <ButtonCard id={id} active={active} />
      </div>
      <br className="border border-black " />
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
