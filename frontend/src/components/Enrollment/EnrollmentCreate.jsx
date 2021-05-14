import * as React from "react";
import { Create, SimpleForm, TextInput, SelectInput, NumberInput } from 'react-admin';

export const EnrollmentCreate = (props) => {
  const enrollmentTypes = [
    { id: 'Event', name: 'Event' },
    { id: 'Training', name: 'Training' },
    { id: 'Workshop', name: 'Workshop' },
    { id: 'Program', name: 'Program' },
  ]

  return (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput 
        source="enrollment_type"
        onCreate={() => {
          const newEnrollmentTypeName = prompt('Enter a new type of enrollment');
          const newEnrollmentType = { id: newEnrollmentTypeName, name: newEnrollmentTypeName };
          enrollmentTypes.push(newEnrollmentType);
          return newEnrollmentType;
        }}
        choices={enrollmentTypes} />
      <NumberInput source="max_seats" />
    </SimpleForm>
  </Create>
)};
