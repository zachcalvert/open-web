import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const EventList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <DateField source="date" />
      <TextField source="location" />
    </Datagrid>
  </List>
);
