import * as React from "react";
import { Edit, SimpleForm, TextInput, SelectInput, NumberInput, DateTimeInput} from 'react-admin';

export const EnrollmentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <SelectInput source="enrollment_type" choices={[
        { id: 'Event', name: 'Event' },
        { id: 'Training', name: 'Training' },
        { id: 'Workshop', name: 'Workshop' },
        { id: 'Program', name: 'Program' },
      ]} />
      <DateTimeInput source="start_time" showTime={true} />
      <DateTimeInput source="end_time" showTime={true} />
      <NumberInput source="max_seats" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Edit>
);