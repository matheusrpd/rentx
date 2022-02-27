import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import tw from '../../lib/tailwind';

interface AcessoryProps {
	name: string;
	icon: React.FC<SvgProps>;
	style?: StyleProp<ViewStyle>;
}

export function Acessory({ name, icon: Icon, style }: AcessoryProps) {
	return (
		<View
			style={[
				tw`min-w-[26%] h-24 flex-1 justify-center items-center bg-bg_primary p-1 mr-2 mb-2`,
				style,
			]}
		>
			<Icon />
			<Text style={tw`font-primary_500 text-text text-sm mt-2`}>{name}</Text>
		</View>
	);
}
