import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import OfferCard from "../Cards/Games/OfferCard";

const AdvertisementScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            
            <View>
                <OfferCard robloxId={1036465979} salaire={1200} autheur="Tchoow" reputation={5} builder scripter urgent urlBackground="https://i.ytimg.com/vi/1wKvAIJedGw/maxresdefault.jpg" description="Coucou je suis la description Coucou je suis la description Coucou je suis la description Coucou je suis la descriptionCoucou je suis la description Coucou je suis la description" />       
            </View>

            <View>
                <OfferCard robloxId={1036465979} salaire={1200} autheur="Tchoow" reputation={5} builder scripter urgent urlBackground="https://i.ytimg.com/vi/1wKvAIJedGw/maxresdefault.jpg" description="Coucou je suis la description Coucou je suis la description Coucou je suis la description Coucou je suis la descriptionCoucou je suis la description Coucou je suis la description" />       
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

export default AdvertisementScreen;
