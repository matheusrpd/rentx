import { View, Text, Image } from 'react-native';
import tw from '../../lib/tailwind';

import GasolineSvg from '../../assets/gasoline.svg';

interface CarProps {
	brand: string;
	name: string;
	rent: {
		period: string;
		price: number;
	};
	thumbnail: string;
}

export function Car({ brand, name, rent, thumbnail }: CarProps) {
	return (
		<View
			style={tw`w-full h-32 bg-bg_secondary flex-row justify-between items-center p-6 mb-4`}
		>
			<View>
				<Text style={tw`font-secondary_500 text-text_detail text-sm uppercase`}>
					{brand}
				</Text>
				<Text style={tw`font-secondary_500 text-title text-base`}>{name}</Text>

				<View style={tw`flex-row items-center mt-4`}>
					<View style={tw`mr-6`}>
						<Text
							style={tw`font-secondary_500 text-text_detail text-sm uppercase`}
						>
							{rent.period}
						</Text>
						<Text style={tw`font-secondary_500 text-main text-base`}>
							{`R$ ${rent.price}`}
						</Text>
					</View>

					<GasolineSvg />
				</View>
			</View>

			<Image
				source={{ uri: thumbnail }}
				resizeMode="contain"
				style={tw`h-[85px] w-[167px]`}
			/>
		</View>
	);
}
