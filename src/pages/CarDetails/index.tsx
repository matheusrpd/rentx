import { View, Text, ScrollView, StatusBar } from 'react-native';
import {
	getBottomSpace,
	getStatusBarHeight,
} from 'react-native-iphone-x-helper';

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

interface CarDetailsProps {}

export function CarDetails({}: CarDetailsProps) {
	return (
		<View style={tw`flex-1 bg-bg_secondary`}>
			<StatusBar barStyle="light-content" />

			<View style={tw`mt-[${getStatusBarHeight()}px]`}>
				<ImageSlider
					imagesUrl={[
						'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
					]}
				/>
			</View>

			<ScrollView
				contentContainerStyle={tw`p-6 items-center`}
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

				<Text
					style={tw`font-primary_400 text-text text-base text-justify mt-4`}
				>
					Este é automóvel desportivo. Surgiu do lendário touro de lide
					indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
					para quem gosta de acelerar.
				</Text>
			</ScrollView>

			<View
				style={tw`w-full px-6 py-6 pb-[${
					getBottomSpace() + 24
				}px] bg-bg_primary`}
			>
				<Button title="Escolher período do aluguel" />
			</View>
		</View>
	);
}
