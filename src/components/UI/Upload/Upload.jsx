import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Button, styled } from "@mui/material";

const Upload = () => {
  const Input = styled("input")({
    display: "none",
  });
  const CLOUDINARY_UNSIGNED_NAME = import.meta.env.VITE_UNSIGNED;
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_YOUR_CLOUDINARY_NAME;
  const [jsFile, setJSFile] = useState(null);
  const [cssFile, setCssFile] = useState(null);
  const [jsFileContent, setJSFileContent] = useState("");

  useEffect(() => {
    console.log(jsFile);
    if (jsFile) {
      var fr = new FileReader();
      fr.onload = () => {
        console.log(fr.result);
        setJSFileContent(fr.result)
      };
      
    }
  }, [jsFile]);

  const uploadImage = (event) => {
    event.preventDefault();
    const files = event.target.files;
    // console.log(files[0]);
    const jsFileData = new FormData();
    const cssFileData = new FormData();
    jsFileData.append("file", jsFile);
    cssFileData.append("file", cssFile);
    jsFileData.append("upload_preset", CLOUDINARY_UNSIGNED_NAME); // Replace the preset name with ENV variable
    cssFileData.append("upload_preset", CLOUDINARY_UNSIGNED_NAME); // Replace the preset name with ENV variable
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
        jsFileData
      ) // Replace Cloudinary name with ENV variable
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
        cssFileData
      ) // Replace Cloudinary name with ENV variable
      .then((response) => console.log(response.data));
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          uploadImage(event);
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ my: "20px" }}
        >
          <label htmlFor="contained-button-file-js">
            <Input
              accept=".js,.jsx,.ts,.tsx"
              id="contained-button-file-js"
              type="file"
              onChange={(event) => {
                setJSFile(event.target.files[0]);
              }}
            />
            <Button variant="outlined" component="span">
              Upload JavaScript
            </Button>
          </label>
          <label htmlFor="contained-button-file-css">
            <Input
              accept=".css,.cssx,.scss,.sass"
              id="contained-button-file-css"
              type="file"
              onChange={(event) => {
                setCssFile(event.target.files[0]);
              }}
            />
            <Button variant="outlined" component="span">
              Upload CSS
            </Button>
          </label>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ mb: "20px" }}
        >
          {/* <Button type="submit" variant="contained" color="primary" size="large">
            Subscribe
          </Button> */}
        </Stack>

        {/* <input type="submit" value="Send" /> */}
      </form>
    </div>
  );
};

export default Upload;
