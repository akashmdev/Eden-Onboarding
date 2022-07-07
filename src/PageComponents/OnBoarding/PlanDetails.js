import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import PropTypes from 'prop-types';
import { useUserOnBoardingData } from '../../store/UserOnBaordingContext';

const PlanDetails = ({ handleNext }) => {
  const [userData, setUserData] = useUserOnBoardingData();
  const [isMySelf, setIsMySelf] = React.useState(true);
  const handleSubmit = () => {
    setUserData({ ...userData, isMySelf });
    handleNext();
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
        {'How are you planning to use Eden?'}
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
        {"We'll streamline your setup experience accordingly."}
      </Typography>
      <Box sx={{ maxWidth: '443px', width: '100%' }}>
        <Box display={'flex'} flex={1}>
          <Card
            elevation={0}
            onClick={() => setIsMySelf(true)}
            sx={(theme) => ({
              flex: 50,
              margin: theme.spacing(0, 1.5, 0, 0),
              padding: theme.spacing(3),
              border: '1px solid',
              borderColor: '#eaeaf0',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#b9b9ba',
              },
              ...(isMySelf && {
                borderColor: theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                },
              }),
            })}
          >
            <PersonIcon color={isMySelf ? 'primary' : 'inherit'} />
            <Typography
              // align={'center'}
              sx={(theme) => ({
                fontSize: '1rem',
                fontWeight: 600,
                margin: theme.spacing(1, 0, 0, 0),
              })}
              variant={'body1'}
            >
              {'For myself'}
            </Typography>
            <Typography
              // align={'center'}
              color={'text.secondary'}
              sx={(theme) => ({
                fontSize: '0.9rem',
                margin: theme.spacing(1, 0, 0, 0),
              })}
              variant={'body1'}
            >
              {'Write better. Think more clearly. Stay organized.'}
            </Typography>
          </Card>
          <Card
            elevation={0}
            onClick={() => setIsMySelf(false)}
            sx={(theme) => ({
              flex: 50,
              margin: theme.spacing(0, 0, 0, 1.5),
              padding: theme.spacing(3),
              border: '1px solid',
              borderColor: '#eaeaf0',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#b9b9ba',
              },
              ...(!isMySelf && {
                borderColor: theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                },
              }),
            })}
          >
            <GroupIcon color={!isMySelf ? 'primary' : 'inherit'} />
            <Typography
              sx={(theme) => ({
                fontSize: '1rem',
                fontWeight: 600,
                margin: theme.spacing(1, 0, 0, 0),
              })}
              variant={'body1'}
            >
              {'With my team'}
            </Typography>
            <Typography
              color={'text.secondary'}
              sx={(theme) => ({
                fontSize: '0.9rem',
                margin: theme.spacing(1, 0, 0, 0),
              })}
              variant={'body1'}
            >
              {'Wikis, docs, tasks & projects, all in one place.'}
            </Typography>
          </Card>
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

PlanDetails.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default PlanDetails;
