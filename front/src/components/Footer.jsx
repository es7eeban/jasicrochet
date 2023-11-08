import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex justify-end w-full p-4 bg-violet-50">
      <nav>
        <ul className="flex justify-around gap-4 text-violet-600">
          <Link to={"#"}>
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-8 hover:text-violet-900"
            />
          </Link>
          <Link>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="h-8 hover:text-violet-900"
            />
          </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
