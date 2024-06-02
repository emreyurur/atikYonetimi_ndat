import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleStudentLogin = () => {
    console.log('Öğrenci girişi');
    // Öğrenci ekranına git
    navigation.navigate('OgrenciLoginScreen');
  };

  const handleAcademicLogin = () => {
    console.log('Akademisyen girişi');
    // Akademisyen ekranına git
    navigation.navigate('AkademisyenLoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ÇOMÜ Atık Yönetimi Sistemi</Text>
      <TouchableOpacity style={styles.button} onPress={handleStudentLogin}>
        <Text style={styles.buttonText}>Öğrenci Girişi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAcademicLogin}>
        <Text style={styles.buttonText}>Akademisyen Girişi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
