import React from "react";
import { View, Text, Alert } from "react-native";
import AtikSec from "../components/AtıkSec";

const OgrenciAtikSecmeScreen = () => {
  const handleAtikGiris = (atikCesidi: string, atikMiktari: number) => {
    // Implement your logic here
    // For example, you could send the data to a backend server or update the local state
    // Alert.alert("Atık Girişi", `Atık Çeşidi: ${atikCesidi}, Atık Miktarı: ${atikMiktari} kg`);
  };

  return (
      <AtikSec onAtikGiris={handleAtikGiris} />
  );
};

export default OgrenciAtikSecmeScreen;
