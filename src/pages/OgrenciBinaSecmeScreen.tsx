import React, { useState } from "react";
import { View, Text } from "react-native";
import BinaSec from "../components/BinaSec";

const OgrenciBinaSecmeScreen = () => {
  // Define a function to handle building selection
  const handleBuildingSelect = (selectedBuilding: string) => {
    // Implement the logic to handle the selected building here
    console.log("Selected Building:", selectedBuilding);
  };

  return <BinaSec onSelect={handleBuildingSelect} />;
};

export default OgrenciBinaSecmeScreen;
