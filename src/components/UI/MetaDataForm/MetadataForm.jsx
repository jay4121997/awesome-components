import {
  Container,
  FormControl,
  Button,
  Input,
  styled,
  TextField,
  Box,
  Grid,
  Stack,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import React from "react";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const MetadataForm = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [formState, setFormState] = React.useState({
    title: "",
    subtitle: "",
    tags: [],
  });
  const loading = open && options.length === 0;
  const topFilms = [
    { title: "Button", year: 1994 },
    { title: "Card", year: 1972 },
    { title: "List", year: 1974 },
    { title: "Accordian", year: 2008 },
  ];

  React.useEffect(() => {
    console.log(formState);
  }, [formState]);

  React.useEffect(() => {
    let active = true;
    if (!loading) return undefined;
    (async () => {
      await sleep(1e3); // For demo purposes.
      if (active) setOptions([...topFilms]);
    })();
    return () => {
      active = false;
    };
  }, [loading]);
  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <>
      <Container maxWidth="lg">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { my: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <TextField
              id="title"
              value={formState.title}
              onChange={(e) =>
                setFormState({ ...formState, title: e.target.value })
              }
              label="Title"
              variant="outlined"
              fullWidth
              required
              spellCheck
            />
            <TextField
              id="subtitle"
              value={formState.subtitle}
              onChange={(e) =>
                setFormState({ ...formState, subtitle: e.target.value })
              }
              label="Substitle"
              variant="outlined"
              fullWidth
              spellCheck
            />

            <Autocomplete
              id="asynchronous-demo"
              required
              multiple
              filterSelectedOptions
              open={open}
              value={formState.tags.title}
              onChange={(e) => {
                setFormState((prev) => ({
                  ...prev,
                  tags: [...prev["tags"], e.target.innerText],
                }));
                // console.log(formState)
              }}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              options={options}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tags"
                  required
                  placeholder="Select tags"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default MetadataForm;
