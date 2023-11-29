import "./Home.scss";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { createPost } from "../../services/postData";
import fileUpLoad from "../../services/fileUpload";
import { AppContext } from "../../Routes/AppRouter";

export default function CreatePost() {
  const [value, setValueTa] = React.useState(0);

  const { usuario } = React.useContext(AppContext);
  // console.log(usuario);

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
    // console.log("tu link: ", fileUpLoadLink);
    // window.location.reload();
    try {
      const endpoint = `publication/${usuario?.idUser}`;

      const formData = new FormData();
      formData.append("content", data.content);
      formData.append("country", data.country);

      if (data.file && data.file[0]) {
        data.file = fileUpLoadLink;

        const fileInfo = {
          file: data.file[0],
          fileUploadLink: fileUpLoadLink,
        };
        formData.append("files", JSON.stringify(fileInfo));
      }

      const response = await createPost(endpoint, data, token);

      // console.log(response);
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
          <Tab label="Escribe un articulo" sx={{ color: "#fff" }} />
          <Tab label="Sube una foto" sx={{ color: "#fff" }} />
          <Tab label="Comparte una actualización" sx={{ color: "#fff" }} />
        </Tabs>
      </Box>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="card__info">
          <div>
            <input
              type="text"
              {...register("content", {
                required: "El contenido es requerido",
              })}
              placeholder="Escribe algo..."
              className="custom-input"
            />

            {errors.content && <p>{errors.content.message}</p>}
            {errors.country && <p>{errors.country.message}</p>}
            {errors.file && <p>{errors.file.message}</p>}
          </div>
        </div>

        <div className="card__buttons-container">
          {/* Sección izquierda para el Select */}
          <div style={{ flex: 1, marginLeft: "30px" }}>
            <Select
              sx={{ backgroundColor: "#fff", height: "36px" }}
              labelId="demo-select-small-label"
              label="Pais"
              id="demo-select-small"
              {...register("country", { required: "El pais es requerido" })}
            >
              <MenuItem value="Colombia">Colombia</MenuItem>
              <MenuItem value="Brazil">Brazil</MenuItem>
            </Select>
            <input
              type="file"
              {...register("file")}
              className="custom-file-input"
            />
          </div>

          {/* Sección derecha para los demás botones */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Stack spacing={1} direction="row">
              {/* <Button
                variant="outlined"
                sx={{ borderColor: "#fff", color: "#fff" }}
              >
                Preview
              </Button> */}
              <Button variant="contained" type="submit">
                Enviar
              </Button>
            </Stack>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
