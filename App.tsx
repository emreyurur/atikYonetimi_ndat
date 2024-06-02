import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./src/pages/WelcomeScreen";
import OgrenciLoginScreen from './src/pages/OgrenciLoginScreen'
import AkademisyenLoginScreen from "./src/pages/AkademisyenLoginScreen";
import OgrenciBinaSecmeScreen from './src/pages/OgrenciBinaSecmeScreen';
import OgrenciAtikSecmeScreen from "./src/pages/OgrenciAtikSecmeScreen";
import AkademisyenScreen from "./src/pages/AkademisyenScreen";
import OgrenciBilgileriScreen from "./src/pages/OgrenciBilgileriScreen";
import AtikBazliRaporScreen from "./src/pages/AtikBazliRaporScreen";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="OgrenciLoginScreen" component={OgrenciLoginScreen}/>
        <Stack.Screen name="AkademisyenLoginScreen" component={AkademisyenLoginScreen}/>
        <Stack.Screen name="OgrenciBinaSecmeScreen" component={OgrenciBinaSecmeScreen}/>
        <Stack.Screen name="OgrenciAtikSecmeScreen" component={OgrenciAtikSecmeScreen}/>
        <Stack.Screen name="AkademisyenScreen" component={AkademisyenScreen}/>
        <Stack.Screen name="OgrenciBilgileriScreen" component={OgrenciBilgileriScreen}/>
        <Stack.Screen name="AtikBazliRaporScreen" component={AtikBazliRaporScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;