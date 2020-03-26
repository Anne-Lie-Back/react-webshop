import React,{useEffect} from 'react';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const tutorialSteps = [
  {
    imgPath:
      'https://source.unsplash.com/i9eaAR4dWi8/1600x900',
  },
  {
    imgPath:
      'https://source.unsplash.com/waTzoTvrFFs/1600x900',
  },
  {
    imgPath:
      'https://source.unsplash.com/p99ZKwVGBRA/1600x900',
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      flexGrow: 1,
    },
    img: {
      height: 255,
      width: '100%',
      overflow: 'hidden',
      display: 'block',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',

    },
  }),
);

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    if(activeStep === maxSteps - 1){
      setActiveStep(prevActiveStep => prevActiveStep = 0);
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if(activeStep === 0){
      setActiveStep(prevActiveStep => prevActiveStep = tutorialSteps.length-1);
    } else {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.root} style={{margin:'0 0 1em 0'}} >
      <div
        className={classes.img}
        style={{
          backgroundImage:`url(${tutorialSteps[activeStep].imgPath})`,
          transition: 'background-image 1s ease-in-out',
        }}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            {theme.direction === 'rtl' ? <ArrowBackIosIcon/> : <ArrowForwardIosIcon/>}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === 'rtl' ? <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>}
          </Button>
        }
      />
    </div>
  );
}