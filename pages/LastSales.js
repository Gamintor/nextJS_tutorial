import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage() {
	const [sales, setSales] = useState();
	// const [isLoading, setIsLoading] = useState(false);

	const { data, error } = useSWR('https://nextjs-course-c155f-default-rtdb.firebaseio.com/sales.json', url => fetch(url).then(res => res.json()));

	useEffect(() => {
		if (data) {
			let salesArray = [];
			for (let k in data) {
				salesArray.push({ id: k, username: data[k].username, volume: data[k].volume });
			}
			setSales(salesArray);
		}
	});

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	fetch('https://nextjs-course-c155f-default-rtdb.firebaseio.com/sales.json')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			let salesArray = [];
	// 			for (let k in data) {
	// 				salesArray.push({ id: k, username: data[k].username, volume: data[k].volume });
	// 			}
	// 			setSales(salesArray);
	// 			setIsLoading(false);
	// 		});
	// }, []);

	if (error) {
		return <p>Failed to load!</p>;
	}

	if (!data || !sales) {
		return <p>Loading...</p>;
	}

	return (
		<ul>
			{sales.map(e => (
				<li key={e.id}>{e.username + '- $' + e.volume}</li>
			))}
		</ul>
	);
}

export default LastSalesPage;