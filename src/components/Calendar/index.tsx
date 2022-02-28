import {
	Calendar as CustomCalendar,
	LocaleConfig,
} from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../../tailwind.config';

interface CalendarProps {}

LocaleConfig.locales['pt-BR'] = {
	monthNames: [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	],
	monthNamesShort: [
		'Jan.',
		'Fev.',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul.',
		'Ago',
		'Set.',
		'Out.',
		'Nov.',
		'Dez.',
	],
	dayNames: [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	],
	dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
	today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-BR';

export function Calendar({}: CalendarProps) {
	return (
		<CustomCalendar
			renderArrow={(direction) => (
				<Feather
					size={24}
					color={theme.colors.text}
					name={`chevron-${direction}`}
				/>
			)}
			headerStyle={{
				backgroundColor: theme.colors.bg_secondary,
				borderBottomWidth: 0.5,
				borderBottomColor: theme.colors.text_detail,
				paddingBottom: 10,
				marginBottom: 10,
			}}
			theme={{
				textDayFontFamily: theme.fontFamily.primary_400[0],
				textDayHeaderFontFamily: theme.fontFamily.secondary_600[0],
				textDayHeaderFontSize: 10,
				textMonthFontFamily: theme.fontFamily.secondary_600[0],
				textMonthFontSize: 20,
				monthTextColor: theme.colors.title,
				arrowStyle: {
					marginHorizontal: -15,
				},
			}}
			firstDay={1}
			minDate={String(new Date())}
		/>
	);
}
