import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Title } from 'react-admin';
import {
  Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  emptyResults: {
    color: theme.palette.text.disabled,
    textAlign: 'center',
    width: '100%',
  }
}));

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <Box fontFamily="fontFamily">
      <Title title="Admin" />
      <h1>Onboarding: Create an Onboarding Request</h1>
      <h2>Search for an Account to Onboard</h2>
    </Box>
  );
};

export default Dashboard;
