import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';

const OrdersScreen = ({props}) => {
  return (
    <ScrollView style={styles.container}>
        <View style={{marginTop: "5%"}}>
            <List.Item
                title="250 Robux"
                description="750 TBX"
                left={props => <List.Icon {...props} icon="gift" />} 
                right={props => <List.Icon {...props} color="#f1c40f" icon="clock" />}
            />
            <List.Item
                title="Annonce"
                description="100 TBX"
                left={props => <List.Icon {...props} icon="newspaper" />} 
                right={props => <List.Icon {...props} color="#55efc4" icon="check-circle" />}
            />
            <List.Item
                title="Annonce"
                description="50 TBX"
                left={props => <List.Icon {...props} icon="newspaper" />} 
                right={props => <List.Icon {...props} color="#55efc4"icon="check-circle" />}
            />
            <List.Item
                title="Jeu (6h)"
                description="200 TBX"
                left={props => <List.Icon {...props} icon="gamepad-variant" />} 
                right={props => <List.Icon {...props} color="#55efc4" icon="check-circle" />}
            />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ecf0f1"
  },
});

export default OrdersScreen;
