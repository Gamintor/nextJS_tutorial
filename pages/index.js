import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

export const DUMMY_POSTS = [
	{
		title: 'Getting started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a React framework for production. It comes with SSR and routing',
		slug: 'getting-started-with-nextjs1',
		date: '2022-02-10',
	},
	{
		title: 'Getting started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a React framework for production. It comes with SSR and routing',
		slug: 'getting-started-with-nextjs2',
		date: '2022-02-10',
	},
	{
		title: 'Getting started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a React framework for production. It comes with SSR and routing',
		slug: 'getting-started-with-nextjs3',
		date: '2022-02-10',
	},
	{
		title: 'Getting started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt: 'NextJS is a React framework for production. It comes with SSR and routing',
		slug: 'getting-started-with-nextjs4',
		date: '2022-02-10',
	},
];

function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	);
}

export default HomePage;
