import * as React from "react";
import { Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

export const EventEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput label="Date" source="date" />
            <TextInput source="location" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);