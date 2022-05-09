import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import MyEditor from "../../components/myEditor/MyEditor";
import MetadataForm from "../../components/UI/MetaDataForm/MetadataForm";
import Upload from "../../components/UI/Upload/Upload";

const steps = [
  { title: "Metadata", component: <MetadataForm /> },
  { title: "Description", component: <MyEditor /> },
  { title: "Source Code", component: <Upload /> },
  
  {
    title: "Images",
    component: <Button variant="outlined">Button</Button>,
  },
  { title: "Preview", component: <div>Preview</div> },
];

export default function NewComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepStatus, setStepStatus] = React.useState({
    1: true,
    2: true,
    3: true,
    4: true,
  });

  const handleNext = () => {
    if (stepStatus[activeStep + 1])
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    else alert("Please fill the required fields");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label.title} {...stepProps}>
                <StepLabel {...labelProps}>{label.title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ mt: 2, mb: 1 }}>{steps[activeStep].component}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant="contained"
                size="large"
              >
                Previous
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} variant="contained" size="large">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}
