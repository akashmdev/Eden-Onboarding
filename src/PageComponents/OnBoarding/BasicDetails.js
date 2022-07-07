import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';

const CustomTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#eaeaf0',
  },
}));
const BasicDetails = ({ handleNext }) => {
  const [userData, setUserData] = useUserOnBoardingData();
  const [name, setName] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [error, setError] = React.useState({});
  const checkError = (key) => {
    return Object.keys(error).findIndex((e) => e === key) !== -1;
  };
  const handleSubmit = () => {
    const error = {};
    if (!name.trim().length) {
      error.name = 'Full name is required';
    }
    if (!userName.trim().length) {
      error.userName = 'Display name is required';
    }
    setError(error);
    if (Object.keys(error).length === 0) {
      setUserData({ ...userData, fullName: name, displayName: userName });
      handleNext();
    }
  };
  return (
    <React.Fragment>
      <Typography
        align={'center'}
        sx={(theme) => ({
          fontWeight: 600,
          margin: theme.spacing(12, 0, 1, 0),
        })}
        variant={'h4'}
      >
        {'Welcome! First thing first...'}
      </Typography>
      <Typography
        align={'center'}
        color={'text.secondary'}
        sx={(theme) => ({
          fontSize: '1.1rem',
          margin: theme.spacing(1, 0, 6, 0),
        })}
        variant={'body1'}
      >
        {'You can always change them later.'}
      </Typography>
      <Box sx={{ maxWidth: '443px', width: '100%' }}>
        <Typography
          color={'text.secondary'}
          fontWeight={500}
          sx={(theme) => ({
            margin: theme.spacing(2, 0, 0.5, 0),
          })}
          variant={'body1'}
        >
          {'Full Name'}
        </Typography>
        <CustomTextField
          error={checkError('name')}
          fullWidth
          helperText={error?.name || null}
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder={'Steve Jobs'}
          value={name}
          variant="outlined"
        />
        <Typography
          color={'text.secondary'}
          fontWeight={500}
          sx={(theme) => ({
            margin: theme.spacing(2, 0, 0.5, 0),
          })}
          variant={'body1'}
        >
          {'Display Name'}
        </Typography>
        <CustomTextField
          error={checkError('userName')}
          fullWidth
          helperText={error?.userName || null}
          id="username"
          onChange={(e) => setUserName(e.target.value)}
          placeholder={'Steve'}
          value={userName}
          variant="outlined"
        />
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
          {'Create Workspace'}
        </Button>
      </Box>
    </React.Fragment>
  );
};

BasicDetails.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default BasicDetails;
