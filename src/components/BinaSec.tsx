import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';

const BinaSec: React.FC = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null);
  const [isBuildingDropdownOpen, setIsBuildingDropdownOpen] = useState<boolean>(false);
  const [isFacultyDropdownOpen, setIsFacultyDropdownOpen] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleSelectBuilding = (building: string) => {
    setSelectedBuilding(building);
    setIsBuildingDropdownOpen(!isBuildingDropdownOpen);
    setSelectedFaculty(null);
  };

  const handleSelectFaculty = (faculty: string) => {
    setSelectedFaculty(faculty);
    setIsFacultyDropdownOpen(false);
    navigation.navigate('OgrenciAtikSecmeScreen');
  };

  const buildings = ['Akademik', 'İdari', 'Yemekhane', 'Kafetarya'];
  const faculties = ['İşletme Fakültesi', 'Mühendislik Fakültesi', 'Sağlık Bilimleri Fakültesi', 'Fen Edebiyat Fakültesi'];

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.title}>Bina Seçin</Text>
        <TouchableOpacity onPress={() => setIsBuildingDropdownOpen(!isBuildingDropdownOpen)}>
          <View style={styles.dropdown}>
            <Text style={[styles.dropdownText, { flex: 1 }]}>
              {selectedBuilding || "Bina Seçin"}
            </Text>
            <Image source={require('../assets/dropdown.png')} style={styles.dropdownIcon} />
          </View>
        </TouchableOpacity>
        {isBuildingDropdownOpen && (
          <ModalDropdown
            options={buildings}
            textStyle={styles.dropdownItemText}
            dropdownStyle={[styles.dropdownMenu, { height: 200 }]}
            dropdownTextStyle={styles.dropdownItemText}
            onSelect={(index: any, value: string) => handleSelectBuilding(value as string)}
            defaultValue="Bina Seçin"
          />
        )}
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.title}>Fakülte Seçin</Text>
        <TouchableOpacity onPress={() => setIsFacultyDropdownOpen(!isFacultyDropdownOpen)}>
          <View style={styles.dropdown}>
            <Text style={[styles.dropdownText, { flex: 1 }]}>
              {selectedFaculty || "Fakülte Seçin"}
            </Text>
            <Image source={require('../assets/dropdown.png')} style={styles.dropdownIcon} />
          </View>
        </TouchableOpacity>
        {isFacultyDropdownOpen && (
          <ModalDropdown
            options={faculties}
            textStyle={styles.dropdownItemText}
            dropdownStyle={[styles.dropdownMenu, { height: 200 }]}
            dropdownTextStyle={styles.dropdownItemText}
            onSelect={(index: any, value: string) => handleSelectFaculty(value as string)}
            defaultValue="Fakülte Seçin"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    width: 300,
    height: 50,
    paddingRight: 24,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
  dropdownMenu: {
    width: 200,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  dropdownItemText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    color: 'black',
  },
  dropdownIcon: {
    position: 'absolute',
    top: '50%',
    right: 8,
    width: 16,
    height: 16,
    marginTop: -8,
  },
});

export default BinaSec;
