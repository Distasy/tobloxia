import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedScrollView from './AnimatedScrollView';
import GamesFetch from './Cards/Games/GamesFetch';

const Games = () => {
  return (
    <AnimatedScrollView>
      <View style={styles.container}>
        <GamesFetch />
      </View>
    </AnimatedScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Games;
