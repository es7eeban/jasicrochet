import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex justify-between w-full p-4 bg-red-50">
      Footer
      <nav>
        <ul className="flex justify-around gap-4">
          <Link to={"#"}>
            <FontAwesomeIcon icon={faInstagram} className="h-8" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faWhatsapp} className="h-8" />
          </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
