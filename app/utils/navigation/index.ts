import { StyleSheet } from 'react-native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

import { themes } from '../../lib/constants';
import { TSupportedThemes } from '../../theme';

export * from './animations';

export const defaultHeader = {
	headerBackTitleVisible: false,
	cardOverlayEnabled: true,
	cardStyle: { backgroundColor: 'transparent' }
};

export const cardStyle = {
	backgroundColor: 'rgba(0,0,0,0)'
};

export const borderBottom: any = (theme: TSupportedThemes) => ({
	borderBottomWidth: StyleSheet.hairlineWidth,
	borderBottomColor: themes[theme].headerBorder,
	elevation: 0
});

export const drawerStyle = {
	width: 320
};

export const themedHeader = (theme: TSupportedThemes) => ({
	headerStyle: {
		...borderBottom(theme),
		backgroundColor: themes[theme].headerBackground
	},
	headerTintColor: themes[theme].headerTintColor,
	headerTitleStyle: { color: themes[theme].headerTitleColor }
});

export const navigationTheme = (theme: TSupportedThemes) => {
	const defaultNavTheme = theme === 'light' ? DefaultTheme : DarkTheme;

	return {
		...defaultNavTheme,
		colors: {
			...defaultNavTheme.colors,
			background: themes[theme].backgroundColor,
			border: themes[theme].borderColor
		}
	};
};

// Gets the current screen from navigation state
export const getActiveRoute: any = (state: any) => {
	const route = state?.routes[state?.index];

	if (route?.state) {
		// Dive into nested navigators
		return getActiveRoute(route.state);
	}

	return route;
};

export const getActiveRouteName = (state: any) => getActiveRoute(state)?.name;
