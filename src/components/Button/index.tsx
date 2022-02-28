import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import tw from '../../lib/tailwind';

interface ButtonProps extends RectButtonProps {
	title: string;
	color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
	return (
		<RectButton
			{...rest}
			style={tw`w-full p-5 justify-center items-center bg-main ${
				color && `bg-[${color}]`
			}`}
		>
			<Text style={tw`font-primary_500 text-base text-white`}>{title}</Text>
		</RectButton>
	);
}
