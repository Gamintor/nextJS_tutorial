import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';
import EventList from '../../components/events/eventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage(props) {
	const [events, setEvents] = useState();
	const router = useRouter();

	const filteredData = router.query.slug;

	const { data, error } = useSWR('https://nextjs-course-c155f-default-rtdb.firebaseio.com/events.json');

	useEffect(() => {
		if (data) {
			const events = [];
			for (let k in data) {
				events.push({ id: k, ...data[k] });
			}
			setEvents(events);
		}
	}, [data]);

	let pageHeadData = (
		<Head>
			<title>Filtered Events</title>
			<meta name='description' content={'A list of filtered events!'} />
		</Head>
	);

	if (!events) {
		return (
			<Fragment>
				{pageHeadData}
				<p className='center'>Loading...</p>
			</Fragment>
		);
	}

	const filteredYear = filteredData[0];
	const filteredMonth = filteredData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	pageHeadData = (
		<Head>
			<title>Filtered Events</title>
			<meta name='description' content={`All events for ${numMonth}/${numYear}`} />
		</Head>
	);

	if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numYear > 2030 || numMonth < 1 || numMonth > 12 || error) {
		return (
			<Fragment>
				{pageHeadData}
				<ErrorAlert>
					<p>Invalid filter! Please adjust your filters.</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show all events</Button>
				</div>
			</Fragment>
		);
	}

	const filteredEvents = events.filter(event => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				{pageHeadData}
				<ErrorAlert>
					<p>No events found for the chosen filter</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show all events</Button>
				</div>
			</Fragment>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<Fragment>
			{pageHeadData}
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</Fragment>
	);
}

// export async function getServerSideProps(context) {
// 	const { params } = context;

// 	const filteredData = params.slug;

// 	const filteredYear = filteredData[0];
// 	const filteredMonth = filteredData[1];

// 	const numYear = +filteredYear;
// 	const numMonth = +filteredMonth;

// 	if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numYear > 2030 || numMonth < 1 || numMonth > 12) {
// 		return {
// 			props: { hasError: true },
// 			// notFound: true,
// 		};
// 	}

// 	const filteredEvents = await getFilteredEvents({
// 		year: numYear,
// 		month: numMonth,
// 	});

// 	return {
// 		props: {
// 			events: filteredEvents,
// 			date: {
// 				year: numYear,
// 				month: numMonth,
// 			},
// 		},
// 	};
// }

export default FilteredEventsPage;
