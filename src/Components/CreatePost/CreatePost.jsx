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
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
          <Tab label="Share an update" sx={{ color: "#fff" }} />
          <Tab label="Upload a photo" sx={{ color: "#fff" }} />
          <Tab label="Write an article" sx={{ color: "#fff" }} />
        </Tabs>
      </Box>

      <div className="card__info">
        <div>
          {value === 0 && (
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Write something..."
              className="custom-input"
            />
          )}
          {value === 1 && (
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Another input..."
              className="custom-input"
            />
          )}
          {value === 2 && (
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Yet another input..."
              className="custom-input"
            />
          )}
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
