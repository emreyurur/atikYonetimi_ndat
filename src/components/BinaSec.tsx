import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface BinaSecProps {
  onSelect: (selectedBuilding: string) => void;
}

const BinaSec: React.FC<BinaSecProps> = ({ onSelect }) => {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleSelectBuilding = (building: string) => {
    setSelectedBuilding(building);
    onSelect(building);
    navigation.navigate('OgrenciAtikSecmeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Binayı Seçin</Text>
      <TouchableOpacity
        style={[styles.buildingButton, selectedBuilding === 'Akademik' && styles.selectedBuilding]}
        onPress={() => handleSelectBuilding('Akademik')}
      >
        <Text style={styles.buttonText}>Akademik Bina</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buildingButton, selectedBuilding === 'İdari' && styles.selectedBuilding]}
        onPress={() => handleSelectBuilding('İdari')}
      >
        <Text style={styles.buttonText}>İdari Bina</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buildingButton, selectedBuilding === 'Yemekhane' && styles.selectedBuilding]}
        onPress={() => handleSelectBuilding('Yemekhane')}
      >
        <Text style={styles.buttonText}>Yemekhane</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buildingButton, selectedBuilding === 'Kafetarya' && styles.selectedBuilding]}
        onPress={() => handleSelectBuilding('Kafetarya')}
      >
        <Text style={styles.buttonText}>Kafetarya</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  buildingButton: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
    borderWidth: 1,
  },
  selectedBuilding: {
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Arial',
  },
});

export default BinaSec;
