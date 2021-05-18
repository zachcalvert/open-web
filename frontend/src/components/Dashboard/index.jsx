import React from 'react';
import { Title } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  CardContent
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(2),
  },
  emptyResults: {
    color: theme.palette.text.disabled,
    textAlign: 'center',
    width: '100%',
  }
}));

export const Dashboard = (props) => {
  const classes = useStyles();
  const username = localStorage.getItem('username');
  const organization = localStorage.getItem('organization');

  return (
    <Box className={classes.root} fontFamily="fontFamily">
      <Title title={organization ? `${organization} Admin` : 'Admin'} />
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.cardContent}>
          {username && <span>Welcome, {username}</span>}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Dashboard;
