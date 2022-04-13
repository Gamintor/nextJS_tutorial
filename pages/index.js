import Link from 'next/link';

function HomePage() {
	return (
		<div>
			<h1>This is home page!</h1>
			<ul>
				<li>
					<Link href='/portfolio'>To portfolio</Link>
				</li>
				<li>
					<Link href='/clients'>To clients</Link>
				</li>
			</ul>
		</div>
	);
}

export default HomePage;
