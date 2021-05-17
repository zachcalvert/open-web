import * as React from "react";
import axios from "axios";
import { List, Datagrid, TextField, DateField } from 'react-admin';
import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
require('react-big-calendar/lib/css/react-big-calendar.css');

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const EnrollmentList = (props) => {
  const [value, setValue] = React.useState(0);
  const [events, setEvents] = React.useState([]);

  async function fetchEnrollments() {
    let url = `${process.env.REACT_APP_DJANGO_URL}api/enrollments/`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
      }
    });
    setEvents(data.results);
  }

  React.useEffect(() => {
    fetchEnrollments();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = ({ start, end }) => {
    window.prompt('New Event name')
  }

  const handleSelect = ({ start, end }) => {
    window.prompt('New Event name')
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="List" {...a11yProps(0)} />
        <Tab label="Calendar" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <List exporter={false} {...props}>
          <Datagrid rowClick="show">
            <TextField source="title" />
            <TextField label="Type" source="enrollment_type" />
            <DateField label="Start" source="start" showTime={true} options={{ weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric' }} />
            <TextField source="filled_seats" />
            <TextField source="max_seats" />
          </Datagrid>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          defaultView="month"
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={handleSelect}
          onSelectSlot={handleClick}
          style={{ height: "80vh" }}
        />
      </TabPanel>
    </>
)};
