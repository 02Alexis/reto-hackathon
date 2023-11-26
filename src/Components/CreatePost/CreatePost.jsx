import "./Home.scss";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { createPost } from "../../services/postData";
import fileUpLoad from "../../services/fileUpload";

export default function CreatePost() {
  const [value, setValueTa] = React.useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event, newValue) => {
    setValueTa(newValue);
  };

  const handleFormSubmit = async (data) => {
    const token = localStorage.getItem("token");
    const fileUpLoadLink = await fileUpLoad(data.file[0]);
    console.log("tu link: ", fileUpLoadLink);

    try {
      const endpoint = "publication/1";

      const formData = new FormData();
      formData.append("content", data.content);
      formData.append("country", data.country);

      // if (data.files && data.files[0]) {
      //   // const files = data.files[0];
      //   data.files = fileUpLoadLink;
      //   formData.append("files", data.files[0]);
      // }
      if (data.file && data.file[0]) {
        formData.append("files", data.file[0]);
        const file = data.file[0];
        data.file = file;
      }

      const response = await createPost(endpoint, data, token);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="card__info">
          <div>
            <input
              type="text"
              {...register("content", { required: "Content is required" })}
              placeholder="Write something..."
              className="custom-input"
            />
            <input
              type="file"
              {...register("file")}
              className="custom-file-input"
            />
            <select
              {...register("country", { required: "Country is required" })}
              className="custom-select"
            >
              <option value="">Select a country</option>
              <option value="Colombia">Colombia</option>
              <option value="Brazil">Brazil</option>
            </select>
            {errors.content && <p>{errors.content.message}</p>}
            {errors.country && <p>{errors.country.message}</p>}
            {errors.file && <p>{errors.file.message}</p>}
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
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </Stack>
        </div>
      </form>
    </motion.div>
  );
}
