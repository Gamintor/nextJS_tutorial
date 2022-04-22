import React from 'react';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
	title: 'Getting started with NextJS',
	image: 'getting-started-nextjs.png',
	slug: 'getting-started-with-nextjs1',
	date: '2022-02-10',
	content: '# This is a first post!',
};

function PostContent() {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

	return (
		<article className={classes.content}>
			<PostHeader image={imagePath} title={DUMMY_POST.title} />
			CONTENT
		</article>
	);
}

export default PostContent;
