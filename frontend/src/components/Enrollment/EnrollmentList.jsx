import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const EnrollmentList = (props) => (
  <List exporter={false} {...props}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <TextField label="Type" source="enrollment_type" />
      <DateField label="Start" source="start_time" showTime={true} options={{ weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric' }} />
      <TextField source="filled_seats" />
      <TextField source="max_seats" />
    </Datagrid>
  </List>
);
