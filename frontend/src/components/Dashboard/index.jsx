import React from 'react';
import { Title } from 'react-admin';
import axios from "axios";
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
  const [username, setUsername] = React.useState(null);
  const [organization, setOrganization] = React.useState(null);

  React.useEffect(() => {
    async function fetchCurrentUser() {
      const { data } = await axios.get(`${process.env.REACT_APP_DJANGO_URL}current-user/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      setUsername(data.username);
      setOrganization(data.group);
    }
    fetchCurrentUser();
  }, []);

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
