import * as React from 'react';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundSize: '50% auto',
      backgroundRepeat: 'repeat-y',
      backgroundImage: `linear-gradient(80deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 0%)`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: '#eaeaf0',
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid`,
  borderColor: '#eaeaf0',
  color: theme.palette.common.black,
  zIndex: 1,
  width: 45,
  height: 45,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.completed && {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot className={className} ownerState={{ completed, active }}>
      {props.icon}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ['1', '2', '3', '4'];

const StepperComponent = ({ activeStep }) => {
  return (
    <Box display={'flex'} justifyContent={'center'} mt={8} width={'100%'}>
      <Box sx={{ maxWidth: '443px', width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon} />
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

StepperComponent.propTypes = {
  activeStep: PropTypes.number,
};

export default StepperComponent;
