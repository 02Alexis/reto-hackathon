import "./Navbar.scss";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  LuMessageSquare,
  LuFileText,
  LuLuggage,
  LuLogOut,
  LuUsers,
  LuUser,
} from "react-icons/lu";
import { MdNotificationsNone } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Navbar = ({ handleMouseEnter, handleMouseLeave, onClose }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
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

      <div>
        <Button
          id="demo-customized-button"
          sx={{
            border: "none",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          aria-controls={open2 ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick2}
          endIcon={<IoMdArrowDropdown style={{ fontSize: "15px" }} />}
        >
          <LuFileText style={{ marginRight: "8px" }} />
          Pages
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
        >
          <MenuItem onClick={handleClose2} disableRipple>
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose2} disableRipple>
            Duplicate
          </MenuItem>
          <MenuItem onClick={handleClose2} disableRipple>
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose2} disableRipple>
            More
          </MenuItem>
        </StyledMenu>
      </div>

      <div className="navbar-separator" />

      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
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

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 2.3,
            "& .MuiAvatar-root": {
              width: 42,
              height: 42,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              // top: 0,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Name user
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BiSolidEdit />
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LuUser />
          </ListItemIcon>
          Edit Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LuLogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </ul>
  );
};

export default Navbar;
