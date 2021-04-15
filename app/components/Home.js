import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Card from "./Cards/HorizontalCard";
import ProfilCard from "./Cards/ProfilCard";
import AnimatedScrollView from './AnimatedScrollView';

const Home = () => {
  return (
    <AnimatedScrollView>
        <View style={styles.container}>
          <ProfilCard vertical={false} size={1} robloxId={107436912} />

          <View>
            <Card vertical={false} size={1} title="Video ad" desc="Watch videos to earn tbx." img="https://media.discordapp.net/attachments/519799997534044170/823204853718974474/lasauce.png" />
          </View>

          <View style={{marginTop: 20}}>
            <Card vertical={false} size={1} title="Video ad" desc="Watch videos to earn tbx." img="https://cdn.discordapp.com/attachments/519799997534044170/823221240059002950/survey2.png" />
          </View>
        </View>
    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ddd",
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Home;
