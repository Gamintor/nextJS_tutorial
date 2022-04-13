import React from 'react';
import EventItem from './EventItem';
import classes from './EventList.module.css';

function EventList(props) {
	const { items } = props;

	return (
		<ul className={classes.list}>
			{items.map(e => (
				<EventItem location={e.location} id={e.id} title={e.title} date={e.date} image={e.image} key={e.id} />
			))}
		</ul>
	);
}

export default EventList;
