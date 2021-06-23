import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import WeatherCard from "../WeatherCard";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "800px",
    flexGrow: 1,
    margin: "0 auto",
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  slider: {
    maxWidth: "415px",
    margin: "0 auto",
  },
}));

function Carrousel({ weatherList }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = weatherList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {weatherList &&
          weatherList.map((day, idx) => (
            <WeatherCard key={idx} weather={day[0]} />
          ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.slider}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <RiArrowLeftSLine />
            ) : (
              <RiArrowRightSLine />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <RiArrowRightSLine />
            ) : (
              <RiArrowLeftSLine />
            )}
          </Button>
        }
      />
    </div>
  );
}

export default Carrousel;
