import "./Home.scss";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CreatePost() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="card">
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
      <Stack spacing={1} direction="row" sx={{ justifyContent: "flex-end" }}>
        <Button variant="outlined" sx={{ borderColor: "#fff", color: "#fff" }}>
          Preview
        </Button>
        <Button variant="contained">Post Status</Button>
      </Stack>
    </div>
  );
}
