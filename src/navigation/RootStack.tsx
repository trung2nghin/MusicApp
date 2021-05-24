import { createStackNavigator } from "@react-navigation/stack";
import React from "react"
import MainTab from "./MainTab";

export type RootStackParamList = {
    MainTab: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="MainTab" 
              component={MainTab}
              options={{
                  headerShown: false,
              }}
              />
        </Stack.Navigator>
    );
};

export default RootStack;