import React from 'react';
import { useRef } from 'react';

function HomePage() {
	const emailInputRef = useRef();
	const feedbackRef = useRef();

	function submitEventHandler(e) {
		e.preventDefault();
		const enteredMail = emailInputRef.current.value;
		const enteredFeedback = feedbackRef.current.value;
		
	}

	return (
		<div>
			<h1>The Home Page</h1>
			<form>
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
		</div>
	);
}

export default HomePage;
