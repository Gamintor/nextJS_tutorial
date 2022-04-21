import React from 'react';
import { Fragment, useContext } from 'react';
import MainHeader from './mainHeader';
import Notification from '../ui/Notification';
import NotificationContext from '../../store/notification-context';

function Layout(props) {
	const notiContext = useContext(NotificationContext);

	const activeNotification = notiContext.notification;

	return (
		<Fragment>
			<MainHeader />
			<main>{props.children}</main>
			{activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />}
		</Fragment>
	);
}

export default Layout;
