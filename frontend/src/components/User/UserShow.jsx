import * as React from "react";
import { Show, SimpleShowLayout, TextField } from 'react-admin';

const UserTitle = () => {
    return <span>User Details</span>;
};

export const UserShow = (props) => (
    <Show title={<UserTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="username" />
            <TextField source="email" />
        </SimpleShowLayout>
    </Show>
);
