import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // React Navigation kullanıyorsanız
import { useState } from 'react';

const OgrenciLoginComponent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Navigation nesnesine erişim sağlayın

  const handleLogin = () => {
    // Boş alan kontrolü
    if (!email.trim() || !password.trim()) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    // Giriş işlemleri burada gerçekleştirilecek
    console.log('Email:', email);
    console.log('Password:', password);

    // Giriş başarılı olduğunda OgrenciScreen'e yönlendir
    navigation.navigate('OgrenciBinaSecmeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ÇOMÜ E-Maili Öğrenci ile Girişi</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
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
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 0.5,
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
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

