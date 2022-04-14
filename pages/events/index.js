import React from 'react';
import EventList from '../../components/events/eventList';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/EventsSearch';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function Events() {
	const router = useRouter();
	const events = getAllEvents();

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<Fragment>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</Fragment>
	);
}

export default Events;
