import { useState, useEffect, useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import CommentList from './CommentList';
import NewComment from './NewComment';
import classes from './Comments.module.css';

function Comments(props) {
	const { eventId } = props;

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [isFetching, setIsFetching] = useState(false);
	const context = useContext(NotificationContext);

	useEffect(() => {
		if (showComments) {
			setIsFetching(true);
			fetch(`/api/comments/${eventId}`)
				.then(response => response.json())
				.then(data => {
					setComments(data.comments);
					setIsFetching(false);
				});
		}
	}, [showComments]);

	function toggleCommentsHandler() {
		setShowComments(prevStatus => !prevStatus);
	}

	function addCommentHandler(commentData) {
		context.showNotification({
			title: 'Uploading comment...',
			message: 'Comment is being proccessed!',
			status: 'pending',
		});

		fetch(`/api/comments/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				return response.json().then(data => {
					throw new Error(data.message || 'Something went wrong');
				});
			})
			.then(data =>
				context.showNotification({
					title: 'Success',
					message: 'Comment uploaded!',
					status: 'success',
				})
			)
			.catch(error => {
				context.showNotification({
					title: 'Error',
					message: error.message || 'Something went wrong!',
					status: 'error',
				});
			});
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && !isFetching && <CommentList items={comments} />}
			{showComments && isFetching && <p>Loading...</p>}
		</section>
	);
}

export default Comments;
