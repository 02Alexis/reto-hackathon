import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsTwitterX,
  BsLinkedin,
  BsSpotify,
} from "react-icons/bs";

const SocialMediaButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    socialsMediaUrl: {
      linkFacebook: "https://www.facebook.com/RedEAmerica/",
      linkTwitter: "https://twitter.com/redeamerica",
      linkYoutube: "https://www.youtube.com/user/redeamerica2011",
      linkInstagram: "https://www.instagram.com/redeamerica/",
      linkLinkedin: "https://www.linkedin.com/company/corporacionredeamerica/",
      linkSpotify:
        "https://open.spotify.com/show/4rjkzEHBqyjQa28BHrUQoM?si=a0655db228da4d10&nd=1&dlsi=ac3b3f7a22e1426f",
    },
  });

  const handleGoTo = (direction) => {
    const socialLinks = data.socialsMediaUrl;
    switch (direction) {
      case "facebook":
        window.open(socialLinks.linkFacebook, "_blank");
        break;
      case "twitter":
        window.open(socialLinks.linkTwitter, "_blank");
        break;
      case "youtube":
        window.open(socialLinks.linkYoutube, "_blank");
        break;
      case "instagram":
        window.open(socialLinks.linkInstagram, "_blank");
        break;
      case "linkedin":
        window.open(socialLinks.linkLinkedin, "_blank");
        break;
      case "spotify":
        window.open(socialLinks.linkSpotify, "_blank");
        break;
      default:
        break;
    }
  };

  const actions = [
    {
      icon: <BsFacebook onClick={() => handleGoTo("facebook")} />,
      name: "Facebook",
    },
    {
      icon: <BsTwitterX onClick={() => handleGoTo("twitter")} />,
      name: "Twitter",
    },
    {
      icon: <BsYoutube onClick={() => handleGoTo("youtube")} />,
      name: "Youtube",
    },
    {
      icon: <BsInstagram onClick={() => handleGoTo("instagram")} />,
      name: "Instagram",
    },
    {
      icon: <BsLinkedin onClick={() => handleGoTo("linkedin")} />,
      name: "Linkedin",
    },
    {
      icon: <BsSpotify onClick={() => handleGoTo("spotify")} />,
      name: "Spotify",
    },
  ];

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        FabProps={{
          style: { backgroundColor: "var(--color-primary)" },
        }}
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default SocialMediaButton;
