import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import {
	useFonts,
	Inter_400Regular,
	Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
	Archivo_400Regular,
	Archivo_500Medium,
	Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import { Home } from './src/pages/Home';

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Archivo_400Regular,
		Archivo_500Medium,
		Archivo_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>
			<Home />
		</>
	);
}
