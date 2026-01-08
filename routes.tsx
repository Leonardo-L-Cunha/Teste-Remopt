import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home"
import Scanner from "./Scanner"

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Scanner" component={Scanner}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
