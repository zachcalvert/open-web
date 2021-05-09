import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';

export const EnrollmentList = (props) => (
  <List exporter={false} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="organization" />
    </Datagrid>
  </List>
);
