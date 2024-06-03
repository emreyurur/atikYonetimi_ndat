import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Student {
  id: string;
  name: string;
  faculty: string;
  department: string;
  schoolNumber: string;
}

const students: Student[] = [
  { id: '1', name: 'Emre Yürür', faculty: 'Mühendislik Fakültesi', department: 'Bilgisayar Mühendisliği', schoolNumber: '210401066' },
  { id: '2', name: 'Nur Sultan Şeyhanlıoğlu', faculty: 'Mühendislik Fakültesi', department: 'Bilgisayar Mühendisliği', schoolNumber: '200401067' },
  { id: '3', name: 'Salih Karabacak', faculty: 'Mühendislik Fakültesi', department: 'Bilgisayar Mühendisliği', schoolNumber: '200401075' },
  { id: '4', name: 'Elif Çağıl', faculty: 'Mühendislik Fakültesi', department: 'Bilgisayar Mühendisliği', schoolNumber: '210401030' },
 
];

const OgrenciBilgileriScreen: React.FC = () => {
  const [studentList, setStudentList] = useState<Student[]>([]);

  useEffect(() => {
    
    setStudentList(students);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıtlı Öğrenciler</Text>
      <FlatList
        data={studentList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.studentContainer}>
             <Text style={styles.row}>
              <Text style={styles.label}>Okul Numarası:</Text> <Text style={styles.value}>{item.schoolNumber}</Text>
            </Text>
            <Text style={styles.row}>
              <Text style={styles.label}>İsim:</Text> <Text style={styles.value}>{item.name}</Text>
            </Text>
            <Text style={styles.row}>
              <Text style={styles.label}>Fakülte:</Text> <Text style={styles.value}>{item.faculty}</Text>
            </Text>
            <Text style={styles.row}>
              <Text style={styles.label}>Bölüm:</Text> <Text style={styles.value}>{item.department}</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'black'
  },
  studentContainer: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderBottomWidth:0.5
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color:'black'
  },
  value: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    color:'black'
  },
});

export default OgrenciBilgileriScreen;
