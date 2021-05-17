import * as React from "react";
import { Show, SimpleShowLayout, DateField, TextField } from 'react-admin';

const EnrollmentTitle = ({ record }) => {
    return <span>{record ? `${record.title}` : ''}</span>;
};

export const EnrollmentShow = (props) => (
  <Show title={<EnrollmentTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <TextField source="enrollment_type" />
      <DateField label="Start" source="start_time" showTime={true} options={{ weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric' }}/>
      <DateField label="End" source="end_time" showTime={true} options={{ weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric' }} />
      <TextField source="filled_seats" />
      <TextField source="max_seats" />
      <TextField source="description" />
    </SimpleShowLayout>
  </Show>
);
