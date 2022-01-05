// @ts-ignore
// TODO BUMP LIB VERSION
import { NotificationsAndroid, PendingNotifications, Notification } from 'react-native-notifications';

import { INotification } from '.';

class PushNotification {
	onNotification: (notification: Notification) => void;
	deviceToken: string;
	constructor() {
		this.onNotification = () => {};
		this.deviceToken = '';

		NotificationsAndroid.setRegistrationTokenUpdateListener((deviceToken: string) => {
			this.deviceToken = deviceToken;
		});

		NotificationsAndroid.setNotificationOpenedListener((notification: Notification) => {
			this.onNotification(notification?.getData());
		});
	}

	getDeviceToken() {
		return this.deviceToken;
	}

	setBadgeCount = (_?: number) => {};

	configure(onNotification: (notification: INotification) => void) {
		this.onNotification = onNotification;
		NotificationsAndroid.refreshToken();
		return PendingNotifications.getInitialNotification();
	}
}

export default new PushNotification();
