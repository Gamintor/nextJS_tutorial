import React from 'react';
import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

function HomePage(props) {
	const { products } = props;

	return (
		<ul>
			{products.map(item => (
				<li key={item.id}>
					<Link href={`/products/${item.id}`}>{item.title}</Link>
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	return {
		props: {
			products: data.products,
		},
		revalidate: 10,
	};
}

export default HomePage;
