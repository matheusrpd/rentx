import {
	BorderlessButton,
	BorderlessButtonProps,
} from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import { theme } from '../../../tailwind.config';

interface BackButtonProps extends BorderlessButtonProps {
	color?: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
	return (
		<BorderlessButton {...rest}>
			<MaterialIcons
				name="chevron-left"
				color={color ? color : theme.colors.text}
				size={24}
			/>
		</BorderlessButton>
	);
}
