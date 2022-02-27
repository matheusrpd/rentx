import { View, Text } from 'react-native';
import tw from '../../lib/tailwind';

export function Home() {
	return (
		<View style={tw`flex-1 justify-center items-center`}>
			<Text style={tw`text-2xl font-primary_500 text-main`}>Teste</Text>
		</View>
	);
}
