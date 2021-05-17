import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Admin, Resource } from 'react-admin';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';

import { Dashboard } from './components/Dashboard';

import { EnrollmentShow } from './components/Enrollment/EnrollmentShow';
import { EnrollmentList } from './components/Enrollment/EnrollmentList';
import { EnrollmentCreate } from './components/Enrollment/EnrollmentCreate';
import { EnrollmentEdit } from './components/Enrollment/EnrollmentEdit';

import { UserShow } from './components/User/UserShow';
import { UserList } from './components/User/UserList';
import { UserCreate } from './components/User/UserCreate';
import { UserEdit } from './components/User/UserEdit';

const authProvider = tokenAuthProvider({obtainAuthTokenUrl: `${process.env.REACT_APP_DJANGO_URL}api-token-auth/`})
const dataProvider = drfProvider(`${process.env.REACT_APP_DJANGO_URL}api`, fetchJsonWithAuthToken);
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
      <Resource name="enrollments" list={EnrollmentList} show={EnrollmentShow} create={EnrollmentCreate} edit={EnrollmentEdit}  />
    </Admin>
)};

export default App;