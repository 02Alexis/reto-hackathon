import "./Header.scss";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import ModalNavbar from "../ModalNavbar/ModalNavbar";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { CiSearch } from "react-icons/ci";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  // paddingLeft: "0.5rem",

  paddingRight: "5rem",
  width: "350%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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
        <Link to="/home" className="custom-logo">
          <motion.div whileHover={{ y: -2 }}>
            <img src={Logo} className="custom-logo-icon" />
          </motion.div>
          <Search>
            <SearchIconWrapper>
              <CiSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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

      <div className="social-media-fixed">
        <SocialMediaButton />
      </div>
    </header>
  );
};

export default Header;
