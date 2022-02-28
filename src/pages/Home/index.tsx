import { View, Text, FlatList, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import tw from '../../lib/tailwind';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

export function Home() {
	const navigation = useNavigation();

	function handleCarDetails() {
		navigation.navigate('CarDetails');
	}

	return (
		<View style={tw`flex-1 bg-bg_primary`}>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>

			<View style={tw`w-full h-28 bg-header justify-end px-6 pb-8`}>
				<View style={tw`flex-row justify-between items-center`}>
					<Logo width={RFValue(108)} height={RFValue(12)} />

					<Text style={tw`font-primary_400 text-base text-text`}>
						Total de 12 carros
					</Text>
				</View>
			</View>

			<FlatList
				contentContainerStyle={tw`p-4`}
				showsVerticalScrollIndicator={false}
				data={[1, 2, 3]}
				keyExtractor={(item) => String(item)}
				renderItem={({ item }) => (
					<Car
						brand="Audi"
						name="RS 5 Coupé"
						type="eletric"
						rent={{
							period: 'Ao dia',
							price: 120,
						}}
						thumbnail="https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png"
						onPress={handleCarDetails}
					/>
				)}
			/>
		</View>
	);
}
