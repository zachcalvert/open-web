import * as React from "react";
import { Create, SimpleForm, TextInput, PasswordInput } from 'react-admin';

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="username" source="username" />
            <TextInput label="email" source="email" />
            <PasswordInput label="Confirm Password"source="password" />
            <PasswordInput label="Confirm Password" source="password" />
        </SimpleForm>
    </Create>
);
