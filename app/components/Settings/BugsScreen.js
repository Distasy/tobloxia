import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import {Picker} from '@react-native-picker/picker';

const BugsScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <ScrollView style={styles.container}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            
            <Text>Priorité</Text>
            <Picker
                style={{height: 50, borderColor: "black", borderWidth: 1}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Haute" value="Haute" />
                <Picker.Item label="Moyenne" value="Moyenne" />
                <Picker.Item label="Basse" value="Basse" />
            </Picker>

            <TextInput
                theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                mode='outlined'
                label="Message"
                placeholder="Description du bug"
                style={{marginBottom: "5%"}}
                multiline={true}
                numberOfLines={5}
            />

            <View style={styles.confirmBox}>
                <AwesomeButtonRick width='100%' textSize={20} textColor="white" backgroundColor="#55efc4" backgroundDarker="#00b894">Envoyer</AwesomeButtonRick>
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

export default BugsScreen;
