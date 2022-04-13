import Link from 'next/link';
import React from 'react';
import classes from './EventItem.module.css';

function EventItem(props) {
	const { title, image, date, location, id } = props;

	const readableDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
	const formatedAddress = location.replace(', ', '\n');

	return (
		<li className={classes.item}>
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{readableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formatedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={`/events/${id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
