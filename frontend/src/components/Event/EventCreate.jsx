import * as React from "react";
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

export const EventCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput label="Date" source="date" defaultValue={new Date()} />
            <TextInput source="teaser" options={{ multiLine: true }} />
            <TextInput multiline source="description" />
        </SimpleForm>
    </Create>
);
