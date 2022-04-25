import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Gabrijelov blog</title>
				<meta name='description' content='I blog as a part of a tutorial' />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();
	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
