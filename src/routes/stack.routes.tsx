import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { CarDetails } from '../pages/CarDetails';
import { Scheduling } from '../pages/Scheduling';
import { SchedulingDetails } from '../pages/SchedulingDetails';
import { SchedulingComplete } from '../pages/SchedulingComplete';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<Screen name="Home" component={Home} />
			<Screen name="CarDetails" component={CarDetails} />
			<Screen name="Scheduling" component={Scheduling} />
			<Screen name="SchedulingDetails" component={SchedulingDetails} />
			<Screen name="SchedulingComplete" component={SchedulingComplete} />
		</Navigator>
	);
}
