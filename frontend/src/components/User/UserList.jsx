import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid rowClick='show'>
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
