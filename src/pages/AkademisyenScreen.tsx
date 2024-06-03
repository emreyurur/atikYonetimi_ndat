import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AkademisyenScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rapor Görüntüleme Ekranı</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OgrenciBilgileriScreen')}
      >
        <Text style={styles.buttonText}>Öğrenci Bilgilerini Göster</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BinaBazliRaporScreen')}
      >
        <Text style={styles.buttonText}>Bina Bazlı Atık Raporlarını İncele</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AtikBazliRaporScreen')}
      >
        <Text style={styles.buttonText}>Atık Çeşidi Bazlı Raporları İncele</Text>
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
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AkademisyenScreen;
