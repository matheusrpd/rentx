import { View, Text, ScrollView, StatusBar } from 'react-native';
import {
	getBottomSpace,
	getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import tw from '../../lib/tailwind';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import { theme } from '../../../tailwind.config';
import { useNavigation } from '@react-navigation/native';

interface SchedulingDetailsProps {}

export function SchedulingDetails({}: SchedulingDetailsProps) {
	const navigation = useNavigation();

	function handleRent() {
		navigation.navigate('SchedulingComplete');
	}

	function handleBack() {
		navigation.goBack();
	}

	return (
		<View style={tw`flex-1 bg-bg_secondary`}>
			<StatusBar
				barStyle="dark-content"
				translucent
				backgroundColor="transparent"
			/>

			<View style={tw`mt-[${getStatusBarHeight() + 16}px]`}>
				<ImageSlider
					imagesUrl={[
						'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
					]}
					onPressButtonBack={handleBack}
				/>
			</View>

			<ScrollView
				contentContainerStyle={tw`p-6`}
				showsVerticalScrollIndicator={false}
			>
				<View style={tw`w-full flex-row justify-between items-center`}>
					<View>
						<Text
							style={tw`font-secondary_500 text-text_detail text-xs uppercase`}
						>
							Lamborghini
						</Text>
						<Text style={tw`font-secondary_500 text-title text-2xl`}>
							Huracan
						</Text>
					</View>

					<View>
						<Text
							style={tw`font-secondary_500 text-text_detail text-xs uppercase`}
						>
							Ao dia
						</Text>
						<Text style={tw`font-secondary_500 text-main text-2xl`}>
							R$ 580
						</Text>
					</View>
				</View>

				<View
					style={tw`w-full flex-row flex-wrap justify-between items-center mt-3`}
				>
					<Acessory name="380km/h" icon={SpeedSvg} />
					<Acessory name="3.2s" icon={AccelerationSvg} />
					<Acessory name="800 HP" icon={ForceSvg} style={tw`mr-0`} />
					<Acessory name="Gasolina" icon={GasolineSvg} />
					<Acessory name="Automático" icon={ExchangeSvg} />
					<Acessory name="2 pessoas" icon={PeopleSvg} style={tw`mr-0`} />
				</View>

				<View
					style={tw`w-full flex-row justify-between items-center mt-10 border-b border-b-line pb-4`}
				>
					<View style={tw`h-12 w-12 justify-center items-center bg-main`}>
						<Feather
							name="calendar"
							size={RFValue(24)}
							color={theme.colors.white}
						/>
					</View>

					<View>
						<Text
							style={tw`font-secondary_500 text-xs text-text_detail uppercase`}
						>
							De
						</Text>
						<Text style={tw`font-primary_500 text-base text-title`}>
							10/02/2022
						</Text>
					</View>

					<Feather
						name="chevron-right"
						size={RFValue(12)}
						color={theme.colors.text}
					/>

					<View>
						<Text
							style={tw`font-secondary_500 text-xs text-text_detail uppercase`}
						>
							Até
						</Text>
						<Text style={tw`font-primary_500 text-base text-title`}>
							16/02/2022
						</Text>
					</View>
				</View>

				<View style={tw`w-full mt-4`}>
					<Text
						style={tw`font-secondary_500 text-text_detail text-xs uppercase`}
					>
						Total
					</Text>
					<View style={tw`w-full flex-row justify-between`}>
						<Text style={tw`font-primary_500 text-base text-title`}>
							R$ 580 x 3 diárias
						</Text>
						<Text style={tw`font-secondary_500 text-2xl text-success`}>
							R$ 2.900
						</Text>
					</View>
				</View>
			</ScrollView>

			<View
				style={tw`w-full px-6 py-6 pb-[${
					getBottomSpace() + 24
				}px] bg-bg_primary`}
			>
				<Button
					title="Alugar agora"
					color={theme.colors.success}
					onPress={handleRent}
				/>
			</View>
		</View>
	);
}
