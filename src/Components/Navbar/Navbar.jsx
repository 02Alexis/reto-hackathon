import "./Navbar.scss";
import { Link } from "react-router-dom";

const links = [
  {
    route: "/",
    label: "RedEAmérica",
  },
  {
    route: "#conocimiento",
    label: "Conocimiento Colaborativo",
  },
  {
    route: "#dialogo",
    label: "Díalogo Regional",
  },
  {
    route: "#noticias",
    label: "Noticias",
  },
  {
    route: "#contact",
    label: "Contacto",
  },
];

const Navbar = ({ handleMouseEnter, handleMouseLeave, onClose }) => {
  return (
    <ul className="navbar">
      {links.map(({ route, label }) => (
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={label}
        >
          <Link href={route} onClick={onClose} smooth={true}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
