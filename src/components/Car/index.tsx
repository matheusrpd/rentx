import { View, Text, Image } from 'react-native';
import tw from '../../lib/tailwind';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

interface CarProps {
	brand: string;
	name: string;
	type: 'gasoline' | 'eletric';
	rent: {
		period: string;
		price: number;
	};
	thumbnail: string;
}

export function Car({ brand, name, type, rent, thumbnail }: CarProps) {
	return (
		<View
			style={tw`w-full h-32 bg-bg_secondary flex-row justify-between items-center p-6 mb-4`}
		>
			<View>
				<Text style={tw`font-secondary_500 text-text_detail text-xs uppercase`}>
					{brand}
				</Text>
				<Text style={tw`font-secondary_500 text-title text-base`}>{name}</Text>

				<View style={tw`flex-row items-center mt-4`}>
					<View style={tw`mr-6`}>
						<Text
							style={tw`font-secondary_500 text-text_detail text-xs uppercase`}
						>
							{rent.period}
						</Text>
						<Text style={tw`font-secondary_500 text-main text-base`}>
							{`R$ ${rent.price}`}
						</Text>
					</View>

					{type === 'gasoline' ? (
						<Feather name="droplet" size={20} style={tw`text-text_detail`} />
					) : (
						<SimpleLineIcons
							name="energy"
							size={20}
							style={tw`text-text_detail`}
						/>
					)}
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
