import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ShopCard from "./Cards/ShopCard"



const Shop = () => {
  return (
    <View style={styles.container}>

      <ShopCard objId={6465489973} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76a6ef',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Shop;
