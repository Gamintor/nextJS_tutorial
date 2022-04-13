import React from 'react';
import { useRouter } from 'next/router';

function BlogPost() {
	const router = useRouter();
	console.log(router.query);
	return (
		<div>
			<h1>BlogPost</h1>
		</div>
	);
}

export default BlogPost;
