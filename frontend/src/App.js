import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { Admin, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';

import { Dashboard } from './components/Dashboard';
import { EnrollmentShow } from './components/Enrollment/EnrollmentShow';
import { EnrollmentList } from './components/Enrollment/EnrollmentList';
import { EventList } from './components/Event/EventList';
import { EventShow } from './components/Event/EventShow';
import { UserShow } from './components/User/UserShow';
import { UserList } from './components/User/UserList';

const authProvider = tokenAuthProvider({obtainAuthTokenUrl: "http://localhost:8000/api-token-auth/"})
const dataProvider = drfProvider("http://localhost:8000/api", fetchJsonWithAuthToken);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#648dae',
    },
  },
});

const App = () => (
    <Admin
      theme={theme}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource name="users" list={UserList} show={UserShow} />
      <Resource name="enrollments" list={EnrollmentList} show={EnrollmentShow} />
      <Resource name="events" list={EventList} show={EventShow} />
    </Admin>
);

export default App;