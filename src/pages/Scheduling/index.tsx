import { View, Text, ScrollView, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../../tailwind.config';
import tw from '../../lib/tailwind';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

interface SchedulingProps {}

export function Scheduling({}: SchedulingProps) {
	const selectedDateOne = true;
	const selectedDateTwo = false;

	return (
		<View style={tw`flex-1 bg-bg_secondary`}>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>

			<View
				style={tw`w-full h-[325px] bg-header p-6 pt-[${
					getStatusBarHeight() + 16
				}px]`}
			>
				<BackButton color={theme.colors.shape} style={tw`self-start`} />

				<Text style={tw`font-secondary_600 text-4xl text-white mt-10`}>
					Escolha uma {'\n'}
					data de início e {'\n'}
					fim do aluguel
				</Text>

				<View
					style={tw`w-full flex-row justify-between items-center mt-auto mb-3`}
				>
					<View style={tw`w-[30%]`}>
						<Text style={tw`font-secondary_500 text-text text-xs uppercase`}>
							De
						</Text>
						<Text
							style={[
								tw`font-primary_500 text-shape text-sm mt-1}`,
								tw.style(!selectedDateOne && 'border-b border-text'),
							]}
						>
							16/02/2022
						</Text>
					</View>

					<ArrowSvg />

					<View style={tw`w-[30%]`}>
						<Text style={tw`font-secondary_500 text-text text-xs uppercase`}>
							Até
						</Text>
						<Text
							style={[
								tw`font-primary_500 text-shape text-sm mt-1}`,
								tw.style(!selectedDateTwo && 'border-b border-text'),
							]}
						></Text>
					</View>
				</View>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Calendar />
			</ScrollView>

			<View style={tw`p-6`}>
				<Button title="Confirmar" />
			</View>
		</View>
	);
}
