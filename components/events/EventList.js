import React from 'react';
import EventItem from './EventItem';

function EventList(props) {
	const { items } = props;

	return (
		<ul>
			{items.map(e => <EventItem />)}
		</ul>
	);
}

export default EventList;
