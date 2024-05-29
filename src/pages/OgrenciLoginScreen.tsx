import React from "react";
import { View,Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import LoginComponent from "../components/OgrenciLoginComponent";

const OgrenciLoginScreen = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('OgrenciScreen');
    };

    return (
        <LoginComponent />
    );
}

export default OgrenciLoginScreen;
