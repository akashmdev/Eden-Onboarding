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
const InputCustomTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#eaeaf0',
    borderRadius: '0px 6px 6px 0px',
  },
}));
const WorkspaceDetails = ({ handleNext }) => {
  const [userData, setUserData] = useUserOnBoardingData();
  const [workspaceName, setWorkspaceName] = React.useState('');
  const [workspaceUrl, setWorkspaceUrl] = React.useState('');
  const [error, setError] = React.useState({});
  const checkError = (key) => {
    return Object.keys(error).findIndex((e) => e === key) !== -1;
  };
  const handleSubmit = () => {
    const error = {};
    if (!workspaceName.trim().length) {
      error.workspaceName = 'Workspace name is required';
    }
    if (!workspaceUrl.trim().length) {
      error.workspaceUrl = 'Work space URL is required';
    }
    setError(error);
    if (Object.keys(error).length === 0) {
      setUserData({ ...userData, workspaceName, workspaceUrl: 'www.eden.com/' + workspaceUrl });
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
        {"Let's set up a home for all your work"}
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
        {'You can always create another workspace later.'}
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
          {'Workspace Name'}
        </Typography>
        <CustomTextField
          error={checkError('workspaceName')}
          fullWidth
          helperText={error?.workspaceName || null}
          id="workspace"
          onChange={(e) => setWorkspaceName(e.target.value)}
          placeholder={'Eden'}
          value={workspaceName}
          variant="outlined"
        />
        <Box display={'flex'}>
          <Typography
            color={'text.secondary'}
            fontWeight={500}
            sx={(theme) => ({
              margin: theme.spacing(2, 0, 0.5, 0),
            })}
            variant={'body1'}
          >
            {'Workspace URL'}
          </Typography>
          <Typography
            fontWeight={500}
            sx={(theme) => ({
              margin: theme.spacing(2, 0, 0.5, 0.5),
              color: '#b2b2b2',
            })}
            variant={'body1'}
          >
            {'(optional)'}
          </Typography>
        </Box>
        <Box display={'flex'}>
          <Box
            alignItems={'center'}
            display={'flex'}
            justifyContent={'center'}
            sx={(theme) => ({
              borderRadius: '6px 0px 0px 6px',
              border: '1px solid #eaeaf0',
              borderRight: 'none',
              backgroundColor: 'rgba(248,246,246,0.79)',
              padding: theme.spacing(1.5),
              height: '56px',
            })}
          >
            <Typography color={'text.secondary'} sx={{ fontSize: '0.9rem' }}>
              www.eden.com/
            </Typography>
          </Box>
          <InputCustomTextField
            error={checkError('workspaceUrl')}
            fullWidth
            helperText={error?.workspaceUrl || null}
            id="workspaceUrl"
            onChange={(e) => setWorkspaceUrl(e.target.value.toLowerCase())}
            placeholder={'Example'}
            value={workspaceUrl}
            variant="outlined"
          />
        </Box>
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

WorkspaceDetails.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default WorkspaceDetails;
