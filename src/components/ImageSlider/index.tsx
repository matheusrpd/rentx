import { View, Image, Dimensions } from 'react-native';
import tw from '../../lib/tailwind';
import { BackButton } from '../BackButton';

interface ImageSliderProps {
	imagesUrl: string[];
	onPressButtonBack?: () => void;
}

export function ImageSlider({
	imagesUrl,
	onPressButtonBack,
}: ImageSliderProps) {
	return (
		<View style={tw`w-full`}>
			<View style={tw`flex-row justify-between items-center px-6`}>
				<BackButton onPress={onPressButtonBack} />

				<View style={tw`flex-row`}>
					<View style={tw`w-[6px] h-[6px] ml-2 rounded bg-title`} />
					<View style={tw`w-[6px] h-[6px] ml-2 rounded bg-text_detail`} />
					<View style={tw`w-[6px] h-[6px] ml-2 rounded bg-text_detail`} />
					<View style={tw`w-[6px] h-[6px] ml-2 rounded bg-text_detail`} />
				</View>
			</View>

			<View
				style={tw`h-[132px] w-[${
					Dimensions.get('window').width
				}px] justify-center items-center`}
			>
				<Image
					source={{ uri: imagesUrl[0] }}
					resizeMode="contain"
					style={tw`w-[280px] h-[132px]`}
				/>
			</View>
		</View>
	);
}
