import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home';
import Dica1 from './components/Dica1';
import Dica2 from './components/Dica2';

const Stack = createStackNavigator();

export default function RotasBotao() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.screen name="Home" component={Home} />
                <Stack.screen name="Dica1" component={Dica1} />
                <Stack.screen name="Dica2" component={Dica2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}