import * as React from "react";
import { Edit, SimpleForm, TextInput, PasswordInput } from 'react-admin';

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="username" source="username" />
            <TextInput label="email" source="email" />
            <PasswordInput label="Confirm Password"source="password" />
            <PasswordInput label="Confirm Password" source="password" />
        </SimpleForm>
    </Edit>
);