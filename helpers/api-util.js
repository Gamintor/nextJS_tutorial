export async function getAllEvents() {
	const response = await fetch('https://nextjs-course-c155f-default-rtdb.firebaseio.com/events.json');
	const data = await response.json();
	const events = [];
	for (let k in data) {
		events.push({ id: k, ...data[k] });
	}
	return events;
}

export async function getFeaturedEvents() {
	const allEvents = await getAllEvents();
	return allEvents.filter(event => event.isFeatured);
}

export async function getEventById(id) {
	const allEvents = await getAllEvents();
	return allEvents.find(event => event.id === id);
}
