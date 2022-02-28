import { View, Text, useWindowDimensions, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import tw from '../../lib/tailwind';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

export function SchedulingComplete() {
	const navigation = useNavigation();
	const { width } = useWindowDimensions();

	function handleAccept() {
		navigation.navigate('Home');
	}

	return (
		<View style={tw`flex-1 bg-header pt-24`}>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>

			<LogoSvg width={width} />

			<View style={tw`flex-1 items-center mt-7`}>
				<DoneSvg width={80} height={80} />

				<Text style={tw`font-secondary_600 text-white text-3xl mt-10`}>
					Carro alugado!
				</Text>
				<Text
					style={tw`font-primary_400 text-base text-text_detail text-center mt-4`}
				>
					Agora você só precisa ir {'\n'}
					até a concessionária da RENTX {'\n'}
					pegar o seu automóvel.
				</Text>

				<RectButton
					onPress={handleAccept}
					style={tw`w-20 h-14 justify-center items-center bg-shape_dark mt-20`}
				>
					<Text style={tw`font-primary_500 text-base text-white uppercase`}>
						Ok
					</Text>
				</RectButton>
			</View>
		</View>
	);
}
