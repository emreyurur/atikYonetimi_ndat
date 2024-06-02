import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const AtikSec: React.FC<{ onAtikGiris: (atikCesidi: string, atikMiktari: number) => void }> = ({ onAtikGiris }) => {
  const [atikCesidi, setAtikCesidi] = useState('');
  const [atikMiktari, setAtikMiktari] = useState('');

  const handleAtikGiris = () => {
    const miktar = parseFloat(atikMiktari);
    if (!isNaN(miktar) && atikCesidi.trim() !== '') {
      if (miktar > 1) {
        onAtikGiris(atikCesidi, miktar);
        setAtikCesidi('');
        setAtikMiktari('');
        Alert.alert(
          "Atık Girişi",
          `Atık Çeşidi: ${atikCesidi}, Atık Miktarı: ${atikMiktari} kg`,
          [
            {
              text: "OK",
              onPress: () => Alert.alert('Bilgiler Sürdürülebilirlik Ofisine gönderildi!'),
            }
          ]
        );
      } else {
        Alert.alert('Atık miktarı 1kg\'den fazla olmalıdır.');
      }
    } else {
      Alert.alert('Lütfen geçerli bir atık çeşidi ve miktarı girin.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atık Çeşidini Seçiniz</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: atikCesidi === 'Cam' ? 'blue' : '#f2f2f2' }]}
          onPress={() => setAtikCesidi('Cam')}
        >
          <Text style={styles.buttonText}>Cam</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: atikCesidi === 'Metal' ? 'blue' : '#f2f2f2' }]}
          onPress={() => setAtikCesidi('Metal')}
        >
          <Text style={styles.buttonText}>Metal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: atikCesidi === 'Plastik' ? 'blue' : '#f2f2f2' }]}
          onPress={() => setAtikCesidi('Plastik')}
        >
          <Text style={styles.buttonText}>Plastik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: atikCesidi === 'Diğer' ? 'blue' : '#f2f2f2' }]}
          onPress={() => setAtikCesidi('Diğer')}
        >
          <Text style={styles.buttonText}>Diğer</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Atık Miktarı (kg)"
        keyboardType="numeric"
        value={atikMiktari}
        onChangeText={setAtikMiktari}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleAtikGiris}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    width: '80%',
    borderWidth: 0.5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
});

export default AtikSec;
