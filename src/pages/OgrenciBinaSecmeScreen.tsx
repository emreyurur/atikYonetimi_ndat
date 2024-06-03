import React, { useState } from "react";
import { View, Text } from "react-native";
import BinaSec from "../components/BinaSec";

const OgrenciBinaSecmeScreen = () => {
  const handleBuildingSelect = (selectedBuilding: string) => {
    console.log("Selected Building:", selectedBuilding);
  };

  return <BinaSec onSelect={handleBuildingSelect} />;
};

export default OgrenciBinaSecmeScreen;
