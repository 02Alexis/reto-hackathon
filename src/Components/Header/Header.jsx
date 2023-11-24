import "./Header.scss";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import ModalNavbar from "../ModalNavbar/ModalNavbar";

const Header = () => {
  const [show, setShow] = useState(false);
  const menu = useRef();

  const handleMouseEnter = (evt) => {
    const target = evt.target;
    const { left, top, width, height } = target.getBoundingClientRect();

    if (menu.current) {
      menu.current.style.setProperty("--left", `${left}px`);
      menu.current.style.setProperty("--top", `${top}px`);
      menu.current.style.setProperty("--width", `${width}px`);
      menu.current.style.setProperty("--height", `${height}px`);
      menu.current.style.opacity = "1";
      menu.current.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    if (menu.current) {
      menu.current.style.opacity = "0";
      menu.current.style.visibility = "hidden";
    }
  };

  return (
    <header className="custom-header">
      <div className="custom-header-container">
        <Link to="/" className="custom-logo">
          <motion.div whileHover={{ y: -2 }}>
            <img src={Logo} className="custom-logo-icon" />
          </motion.div>
        </Link>
        <nav className="custom-nav">
          <button className="custom-menu-button" onClick={() => setShow(!show)}>
            <FaBars size={20} />
          </button>

          <AnimatePresence
            initial={false}
            mode="sync"
            onExitComplete={() => null}
          >
            {show && (
              <ModalNavbar onClose={() => setShow(false)}>
                <Navbar onClose={() => setShow(false)} />
              </ModalNavbar>
            )}
          </AnimatePresence>
          <div className="custom-desktop-nav">
            <Navbar
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        </nav>
      </div>

      <div ref={menu} className="custom-menu-overlay" />
    </header>
  );
};

export default Header;
