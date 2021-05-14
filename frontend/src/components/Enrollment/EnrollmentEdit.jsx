import * as React from "react";
import { Edit, SimpleForm, TextInput, SelectInput, NumberInput} from 'react-admin';

export const EnrollmentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="enrollment_type" choices={[
        { id: 'Event', name: 'Event' },
        { id: 'Training', name: 'Training' },
        { id: 'Workshop', name: 'Workshop' },
        { id: 'Program', name: 'Program' },
      ]} />
      <NumberInput source="max_seats" />
    </SimpleForm>
  </Edit>
);