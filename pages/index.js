import React from 'react';
import { useRef, useState } from 'react';

function HomePage() {
	const [feedbackItems, setFeedbackItems] = useState([]);
	const emailInputRef = useRef();
	const feedbackRef = useRef();

	function submitEventHandler(e) {
		e.preventDefault();
		const enteredMail = emailInputRef.current.value;
		const enteredFeedback = feedbackRef.current.value;
		const reqBody = { email: enteredMail, text: enteredFeedback };
		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(data => console.log(data));
	}

	function loadFeedbackHandler() {
		fetch('/api/feedback')
			.then(response => response.json())
			.then(data => {
				setFeedbackItems(data.feedback);
			});
	}

	return (
		<div>
			<h1>The Home Page</h1>
			<form onSubmit={submitEventHandler}>
				<div>
					<label htmlFor='email'>Your email adrress</label>
					<input type='email' id='email' ref={emailInputRef} />
				</div>
				<div>
					<label htmlFor='feedback'>Your feedback</label>
					<textarea id='feedback' rows='5' ref={feedbackRef} />
				</div>
				<button>Send feedback</button>
			</form>
			<hr />
			<button onClick={loadFeedbackHandler}>Load feedback</button>
			<ul>
				{feedbackItems.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	);
}

export default HomePage;
