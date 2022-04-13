import React from 'react';
import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
	const router = useRouter();
	console.log(router.query);
	return <div>SelectedClientProjectPage</div>;
}

export default SelectedClientProjectPage;
