import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const EnrollmentList = (props) => (
  <List exporter={false} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField label="Type" source="enrollment_type" />
      <TextField source="filled_seats" />
      <TextField source="max_seats" />
    </Datagrid>
  </List>
);
