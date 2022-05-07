import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const CLOUDINARY_UNSIGNED_NAME = import.meta.env.VITE_UNSIGNED;
  console.log(CLOUDINARY_UNSIGNED_NAME);
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_YOUR_CLOUDINARY_NAME;
  console.log(CLOUDINARY_CLOUD_NAME);
  const [jsFile, setJSFile] = useState(null);
  const [cssFile, setCssFile] = useState(null);
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
        <input
          type="file"
          id="myFile"
          name="javaScriptFile"
          accept=".jsx,.js,.ts,.tsx"
          onChange={(event) => {
            setJSFile(event.target.files[0]);
          }}
        />
        <input
          type="file"
          id="myFile"
          name="cssFile"
          accept=".css,.module.css"
          onChange={(event) => {
            setCssFile(event.target.files[0]);
          }}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Upload;
