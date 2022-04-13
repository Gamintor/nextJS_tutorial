import React from 'react';
import EventList from '../../components/events/eventList';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/EventsSearch';
import { Fragment } from 'react';

function Events() {
	const events = getAllEvents();

	return (
		<Fragment>
			<EventsSearch />
			<EventList items={events} />
		</Fragment>
	);
}

export default Events;
