import * as React from 'react';
import Box from '@mui/material/Box';
import StepperComponent from '../src/PageComponents/OnBoarding/StepperComponent';
import Header from '../src/PageComponents/OnBoarding/Header';
import BasicDetails from '../src/PageComponents/OnBoarding/BasicDetails';
import WorkspaceDetails from '../src/PageComponents/OnBoarding/WorkspaceDetails';
import PlanDetails from '../src/PageComponents/OnBoarding/PlanDetails';
import Congratulation from '../src/PageComponents/OnBoarding/Congratulation';
import { withUserOnBoardingData } from '../src/store/UserOnBaordingContext';

const Index = () => {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  return (
    <Box
      sx={(theme) => ({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
      })}
    >
      {/*<div>*/}
      <Header />
      <StepperComponent activeStep={activeStep} />
      {activeStep === 1 && <BasicDetails handleNext={handleNext} />}
      {activeStep === 2 && <WorkspaceDetails handleNext={handleNext} />}
      {activeStep === 3 && <PlanDetails handleNext={handleNext} />}
      {activeStep === 4 && <Congratulation handleNext={handleNext} />}
      {/*</div>*/}
    </Box>
  );
};

export default withUserOnBoardingData(Index);
