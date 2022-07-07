import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';

const Congratulation = () => {
  const [userData] = useUserOnBoardingData();
  const handleSubmit = () => {
    alert(JSON.stringify(userData, null, 4));
  };
  return (
    <React.Fragment>
      <Box display={'flex'} justifyContent={'center'}>
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '65px',
            width: '65px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            margin: theme.spacing(12, 0, 1, 0),
          })}
        >
          <DoneIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        </Box>
      </Box>
      <Typography
        align={'center'}
        sx={(theme) => ({
          fontWeight: 600,
          margin: theme.spacing(3, 0, 1, 0),
        })}
        variant={'h4'}
      >
        {'Congratulations, Eren!'}
      </Typography>
      <Typography
        align={'center'}
        color={'text.secondary'}
        sx={(theme) => ({
          fontSize: '1.1rem',
          margin: theme.spacing(1, 0, 2, 0),
        })}
        variant={'body1'}
      >
        {'You have completed onboarding, you can start using the Eden!'}
      </Typography>
      <Box sx={{ maxWidth: '443px', width: '100%' }}>
        <Button
          color={'primary'}
          disableElevation
          fullWidth
          onClick={handleSubmit}
          size={'large'}
          sx={(theme) => ({
            margin: theme.spacing(3, 0, 6, 0),
            height: '50px',
            textTransform: 'capitalize',
          })}
          variant={'contained'}
        >
          {'Launch Eden'}
        </Button>
      </Box>
    </React.Fragment>
  );
};
export default Congratulation;
