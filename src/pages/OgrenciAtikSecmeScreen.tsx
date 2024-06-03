import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OgrenciAtikSecmeScreen: React.FC = () => {
  const [foodWaste, setFoodWaste] = useState<string>('');
  const [packagingWaste, setPackagingWaste] = useState<string>('');
  const [glassWaste, setGlassWaste] = useState<string>('');
  const [otherWaste, setOtherWaste] = useState<string>('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Atık miktarlarını kontrol et
    const isValidFoodWaste = parseFloat(foodWaste) > 1;
    const isValidPackagingWaste = parseFloat(packagingWaste) > 1;
    const isValidGlassWaste = parseFloat(glassWaste) > 1;
    const isValidOtherWaste = parseFloat(otherWaste) > 1;

    if (isValidFoodWaste && isValidPackagingWaste && isValidGlassWaste && isValidOtherWaste) {
      Alert.alert(
        'Bilgi Gönderildi',
        'Girdiğiniz bilgiler sürdürülebilirlik ofisine başarıyla gönderildi.',
        [{ text: 'Tamam', onPress: () => console.log('Alert closed') }]
      );
    } else {
      Alert.alert('Lütfen 1 kg\'den fazla atık miktarı giriniz.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gıda Atığı (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={foodWaste}
          onChangeText={(text) => setFoodWaste(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ambalaj Atığı (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={packagingWaste}
          onChangeText={(text) => setPackagingWaste(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cam Atığı (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={glassWaste}
          onChangeText={(text) => setGlassWaste(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Diğer Atık (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={otherWaste}
          onChangeText={(text) => setOtherWaste(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight:'bold',
    marginBottom: 5,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    fontSize:20,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15, // padding değerini yukarıda değiştirdim
    paddingHorizontal: 35, // Yatay padding ekledim
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OgrenciAtikSecmeScreen;
