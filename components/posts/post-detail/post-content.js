import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
	const { post } = props;

	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers = {
		// img(image) {
		// 	return <Image alt={image.alt} src={`/images/posts/${post.slug}/${image.src}`} width={600} height={300} />;
		// },
		p(paragraph) {
			const { node } = paragraph;
			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				return (
					<div className={classes.image}>
						<Image alt={image.alt} src={`/images/posts/${post.slug}/${image.properties.src}`} width={600} height={300} />;
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
		code(code) {
			const { className, children } = code;
			const language = className.split('-')[1];
			return <Prism language={language} children={children} style={atomDark} />;
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader image={imagePath} title={post.title} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
