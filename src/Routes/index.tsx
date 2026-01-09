import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Home";
import Scanner from "../Scanner";
import Details from "../Details";

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Scanner" component={Scanner}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
