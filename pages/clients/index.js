import Link from 'next/link';

function ClientsPage() {
	const clients = [
		{ id: 'gabi', name: 'Gabilondo' },
		{ id: 'loze', name: 'Alojzije' },
	];

	return (
		<div>
			<h1>Clients</h1>
			<ul>
				{clients &&
					clients.map(e => (
						<li key={e.id}>
							<Link href={`clients/${e.id}`}>{e.name}</Link>
						</li>
					))}
			</ul>
		</div>
	);
}

export default ClientsPage;
