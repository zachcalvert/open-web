import * as React from "react";
import { Create, SimpleForm, TextInput, SelectInput, NumberInput, DateTimeInput } from 'react-admin';

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
      <TextInput source="title" />
      <SelectInput 
        source="enrollment_type"
        onCreate={() => {
          const newEnrollmentTypeName = prompt('Enter a new type of enrollment');
          const newEnrollmentType = { id: newEnrollmentTypeName, name: newEnrollmentTypeName };
          enrollmentTypes.push(newEnrollmentType);
          return newEnrollmentType;
        }}
        choices={enrollmentTypes} />
      <DateTimeInput source="start" showTime={true} />
      <DateTimeInput source="end" showTime={true} />
      <NumberInput source="max_seats" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
)};
