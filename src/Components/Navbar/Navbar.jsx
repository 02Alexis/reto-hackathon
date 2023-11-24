import "./Navbar.scss";

import * as React from "react";
import { Link } from "react-router-dom";
import {
  LuLuggage,
  LuUsers,
  LuFileText,
  LuMessageSquare,
} from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";

const links = [
  {
    route: "/",
    icon: <LuLuggage />,
    label: "Jobs",
  },
  {
    route: "#connect",
    icon: <LuUsers />,
    label: "Conection",
  },
  {
    route: "#pages",
    icon: <LuFileText />,
    label: "Pages",
  },
];

const settings = ["My Account", "Edit Profile", "Logout", "Logout"];

const Navbar = ({ handleMouseEnter, handleMouseLeave, onClose }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ul className="navbar">
      {links.map(({ route, icon, label }) => (
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={label}
        >
          <Link href={route} onClick={onClose} smooth={true}>
            <span>{icon}</span>

            {label}
          </Link>
        </li>
      ))}
      <div className="navbar-separator" />

      <div className="navbar-icons">
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <LuMessageSquare />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="primary">
            <MdNotificationsNone />
          </Badge>
        </IconButton>
      </div>

      {/* Separación entre iconos y configuración de usuario */}
      <div className="navbar-separator" />

      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </ul>
  );
};

export default Navbar;
