import "./Home.scss";

import * as React from "react";
import { motion } from "framer-motion";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function CreatePost() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <Box sx={{ width: "100%", bgcolor: "#3e3e3e" }} className="card__post">
        <Tabs value={value} onChange={handleChange} centered sx={{ gap: 100 }}>
          <Tab label="Item One" sx={{ color: "#fff" }} />
          <Tab label="Item Two" sx={{ color: "#fff" }} />
          <Tab label="Item Three" sx={{ color: "#fff" }} />
        </Tabs>
      </Box>
      <div className="card__info">
        <div>
          <span className="text">write a article...</span>
        </div>
      </div>
      <div
        className="card__buttons"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: "10px",
        }}
      >
        <Stack spacing={1} direction="row">
          <Button
            variant="outlined"
            sx={{ borderColor: "#fff", color: "#fff" }}
          >
            Preview
          </Button>
          <Button variant="contained">Post Status</Button>
        </Stack>
      </div>
    </motion.div>
  );
}
