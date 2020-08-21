import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import api from "../../services/api";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import heartIcon from "../../assets/images/icons/heart.png";

function Landing() {
  const navigation = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  function handleNavigatetoGiveClassesPage() {
    navigation.navigate("GiveClasses");
  }

  function handleNavigatetoStudyPages() {
    navigation.navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo! {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigatetoStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigatetoGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} cone
        {totalConnections === 1 ? (
          <Text>xão já realizada</Text>
        ) : (
          <Text>xões já realizadas </Text>
        )}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
