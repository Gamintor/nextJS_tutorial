import React from 'react';
import EventList from '../../components/events/eventList';
import { getAllEvents } from '../../helpers/api-util';
import EventsSearch from '../../components/events/EventsSearch';
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Events(props) {
	const router = useRouter();
	const { events } = props;

	function findEventsHandler(year, month) {
		router.push(`/events/${year}/${month}`);
	}

	return (
		<Fragment>
			<Head>
				<title>All events</title>
				<meta name='description' content='Find a lot of great events that will make you grow!' />
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 60,
	};
}

export default Events;
