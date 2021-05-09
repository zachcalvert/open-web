import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Admin, Resource } from 'react-admin';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';

import { Dashboard } from './components/Dashboard';
import { EnrollmentShow } from './components/Enrollment/EnrollmentShow';
import { EnrollmentList } from './components/Enrollment/EnrollmentList';
import { EventList } from './components/Event/EventList';
import { EventShow } from './components/Event/EventShow';
import { UserShow } from './components/User/UserShow';
import { UserList } from './components/User/UserList';
import { EventEdit } from './components/Event/EventEdit';
import { EventCreate } from './components/Event/EventCreate';
import { UserCreate } from './components/User/UserCreate';
import { UserEdit } from './components/User/UserEdit';

const authProvider = tokenAuthProvider({obtainAuthTokenUrl: "http://localhost:8000/api-token-auth/"})
const dataProvider = drfProvider("http://localhost:8000/api", fetchJsonWithAuthToken);
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#648dae',
    },
  },
});

const App = () => {
  
  return (
    <Admin
      theme={theme}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}>
      <Resource name="users" list={UserList} show={UserShow} create={UserCreate} edit={UserEdit} />
      <Resource name="enrollments" list={EnrollmentList} show={EnrollmentShow}  />
      <Resource name="events" list={EventList} show={EventShow} create={EventCreate} edit={EventEdit} />
    </Admin>
)};

export default App;