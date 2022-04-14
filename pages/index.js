import React from 'react';
import path from 'path';
import fs from 'fs/promises';

function HomePage(props) {
	const { products } = props;

	return (
		<ul>
			{products.map(item => (
				<li key={item.id}>{item.title}</li>
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
	};
}

export default HomePage;
