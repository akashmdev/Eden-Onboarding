import * as React from 'react';
import Image from 'next/image';
import LOGO from '../../assets/logo/eden_logo.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(4, 0),
      })}
    >
      <Image alt="Eden Logo" height={'25px'} src={LOGO} width={'25px'} />
      <Typography
        id={'title'}
        sx={(theme) => ({
          fontSize: '1.7rem',
          fontWeight: 600,
          marginLeft: theme.spacing(1.5),
          paddingTop: theme.spacing(0.5),
        })}
        variant={'h3'}
      >
        {'Eden'}
      </Typography>
    </Box>
  );
};

export default Header;
