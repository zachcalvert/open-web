import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

const EventTitle = ({ record }) => {
    return <span>{record ? `${record.name}` : ''}</span>;
};

export const EventShow = (props) => (
    <Show title={<EventTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <DateField source="date" />
            <TextField source="location" />
            <RichTextField source="description" />
        </SimpleShowLayout>
    </Show>
);
