import React from "react";
import { Text, Button, View } from "react-native";
import Heading from "../components/typography/heading";
import { Screens } from "../screens";
import Color from "../shared/colors";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View
      style={{
        padding: 56,
      }}
    >
      <View
        style={{
          borderLeftWidth: 4,
          borderLeftColor: Color["black-16"],
          padding: 6,
          marginTop: 64,
        }}
      >
        <Heading>Audio zprávy</Heading>
      </View>
      <Text>
        Všechny zprávy ze všech zpravodajských portálů pro Vás jako audio.
        Pusťte si 30s ukázky zadarmo nebo si kupte kredity a poslechněte si
        dlouhou verzi. Stačí si jen naklikat frontu zpráv nebo nechte výběr na
        naší umělé inteligenci, která se neustále učí z Vašich reakcí.
      </Text>
      <Button
        title="Nastavit témata"
        onPress={() => navigation.navigate(Screens.topics)}
      />
    </View>
  );
};

export default OnboardingScreen;
