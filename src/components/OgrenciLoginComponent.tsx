import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OgrenciLoginComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }
    
    console.log('Email:', email);
    console.log('Password:', password);

    navigation.navigate('OgrenciBinaSecmeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ÇOMÜ E-Maili ile Öğrenci Girişi</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta</Text>
        <TextInput
          style={styles.input}
          placeholder="@comu.edu uzantılı e-posta adresi"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Parola</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="UBYS Parolası"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image
              source={require('../assets/showpassword_icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color:"black"
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color:"black",
    textAlign:"center",
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 0.5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 0.5,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    padding: 10,
  },
  icon: {
    width: 16,
    height: 16,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OgrenciLoginComponent;
