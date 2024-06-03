import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, XAxis, Grid } from 'react-native-svg-charts';

interface Atik {
  tur: string;
  miktar: number;
}

const AtikBazliRaporScreen: React.FC = () => {
  const atikler: Atik[] = [
    { tur: 'Cam', miktar: 20 },
    { tur: 'Metal', miktar: 10 },
    { tur: 'Plastik', miktar: 15 },
    { tur: 'Diğer', miktar: 5 },
  ];

  const calculatePercentage = (miktar: number, total: number): string => {
    return ((miktar / total) * 100).toFixed(2);
  };

  const calculateTotal = (): number => {
    return atikler.reduce((total, atik) => total + atik.miktar, 0);
  };

  const renderRapor = () => {
    const total = calculateTotal();
    const colors = ['#ff7f0e', '#2ca02c', '#1f77b4', '#d62728'];
    return atikler.map((atik, index) => ({
      tur: atik.tur,
      miktar: atik.miktar,
      yuzde: parseFloat(calculatePercentage(atik.miktar, total)),
      color: colors[index],
    }));
  };

  const data = renderRapor();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atık Çeşitleri Raporu</Text>
      <BarChart
        style={{ height: 300 }}
        data={data.map((item) => item.yuzde)}
        svg={{ fill: 'rgba(105, 65, 244, 0.8)' }}
        gridMin={0}
        spacingInner={0.3}
        contentInset={{ top: 10, bottom: 10 }}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(_value, index) => data[index].tur}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: 'black' }}
      />
      {data.map((item, index) => (
        <View key={index} style={styles.legend}>
          <View style={[styles.legendColor, { backgroundColor: item.color }]} />
          <Text>{`${item.tur}: ${item.yuzde}%`}</Text>
        </View>
      ))}
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
    color:'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendColor: {
    width: 20,
    height: 10,
    marginRight: 5,
  },
});

export default AtikBazliRaporScreen;
