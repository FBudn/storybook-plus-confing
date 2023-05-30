import React from "react";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import LoginScreen from "./components/Screens/LoginScreen/LoginScreen";
import SignUpScreen from "./components/Screens/SignUpScreen/SignUpScreen";
import { store } from "./components/redux/store";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginTemplate">
          <Stack.Screen
            name="LoginTemplate"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpTemplate"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "false") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
