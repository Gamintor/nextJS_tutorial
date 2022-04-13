import { useRouter } from 'next/router';

function ClientProjectsPage() {
	const router = useRouter();

	function handleClick() {
		router.push('/clients/gabi/projecta');
	}

	return (
		<div>
			<h1>Projects of a certain client</h1>
			<button onClick={handleClick}>Load Project A</button>
		</div>
	);
}

export default ClientProjectsPage;
