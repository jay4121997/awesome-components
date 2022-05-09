import { DropzoneArea } from "material-ui-dropzone";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";
import React from "react";
import axios from "axios";

const useStyles = makeStyles((theme) =>
  createStyles({
    previewChip: {
      minWidth: 160,
      maxWidth: 210,
    },
  })
);

const DropFile = ({ numberOfFiles, text, allowedTypes }) => {
  const CLOUDINARY_UNSIGNED_NAME = import.meta.env.VITE_UNSIGNED;
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_YOUR_CLOUDINARY_NAME;
  const classes = useStyles();
  const theme = createTheme({}); // Default theme for the rest of the application
  const [files, setFiles] = React.useState([]);
  //   React.useEffect(() => {
  //     files.map((file) => {
  //       const jsFileData = new FormData();
  //       jsFileData.append("file", file);
  //       jsFileData.append("upload_preset", CLOUDINARY_UNSIGNED_NAME); // Replace the preset name with ENV variable
  //       axios
  //         .post(
  //           `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
  //           jsFileData
  //         ) // Replace Cloudinary name with ENV variable
  //         .then((response) => console.log(response.data))
  //         .catch((err) => console.log(err));
  //     });
  //   }, []);
  return (
    <ThemeProvider theme={theme}>
      <DropzoneArea
        showPreviews={true}
        showPreviewsInDropzone={false}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: "row" } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
        previewText="Uploaded files"
        dropzoneText={text}
        acceptedFiles={allowedTypes.split(',')}
        filesLimit={parseInt(numberOfFiles) }
        onDrop={(files) => setFiles((prev) => setFiles([...prev, ...files]))}
        onDelete={(file) =>
          setFiles((prev) => setFiles(prev.filter((f) => f.name !== file.name)))
        }
      />
    </ThemeProvider>
  );
};

export default DropFile;
