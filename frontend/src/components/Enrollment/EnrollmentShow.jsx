import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

const EnrollmentTitle = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const EnrollmentShow = (props) => (
  <Show title={<EnrollmentTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="enrollment_type" />
      <TextField source="filled_seats" />
      <TextField source="max_seats" />
    </SimpleShowLayout>
  </Show>
);
