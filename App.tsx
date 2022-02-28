import AppLoading from 'expo-app-loading';
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
import { CarDetails } from './src/pages/CarDetails';
import { Scheduling } from './src/pages/Scheduling';
import { SchedulingDetails } from './src/pages/SchedulingDetails';
import { SchedulingComplete } from './src/pages/SchedulingComplete';

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

	return <SchedulingComplete />;
}
