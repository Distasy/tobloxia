import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import OfferCard from "../Cards/Games/OfferCard";
import GameCard from "../Cards/Games/GameCard";

const GamesScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            
            <View>
                <GameCard mapId={5161289255} mapName="TOBLOX EST DE RETOUR" mapImg="5161289255" mapVisits="1160" />
            </View>

            <View>
                <GameCard mapId={5161289255} mapName="TOBLOX EST DE RETOUR" mapImg="5161289255" mapVisits="1160" />
            </View>
        
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ecf0f1",
    paddingTop: 30
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  label: {
    marginRight: 5,
  },
  confirmBox: {
    marginTop: "10%"
  }
});

export default GamesScreen;
