import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import classes from './EventItem.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem(props) {
	const { title, image, date, location, id } = props;

	const readableDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
	const formatedAddress = location.replace(', ', '\n');

	return (
		<li className={classes.item}>
			<Image src={'/' + image} alt={title} width={250} height={160} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{readableDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formatedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={`/events/${id}`}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
