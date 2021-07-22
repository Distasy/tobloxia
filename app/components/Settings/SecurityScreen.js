import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const SecurityScreen = () => {
const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            
            <TextInput
                theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                mode='outlined'
                label="Mot de passe actuel"
                placeholder="Votre mot de passe actuel"
                left={
                    <TextInput.Icon
                        name="lock"
                    />
                }
                style={{marginBottom: "5%"}}
                secureTextEntry={true}
            />

            <TextInput
                theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                mode='outlined'
                label="Nouveau mot de passe"
                placeholder="Rentrez votre nouveau mot de passe"
                left={
                    <TextInput.Icon
                        name="lock"
                    />
                }
                style={{marginBottom: "5%"}}
                secureTextEntry={true}
            />

            <TextInput
                theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                mode='outlined'
                label="Confirmez mot de passe"
                placeholder="Confirmez votre nouveau mot de passe"
                left={
                    <TextInput.Icon
                        name="lock"
                    />
                }
                style={{marginBottom: "5%"}}
                secureTextEntry={true}
            />

            <View style={styles.confirmBox}>
                <AwesomeButtonRick width='100%' textSize={20} textColor="white" backgroundColor="#55efc4" backgroundDarker="#00b894">Confirmer</AwesomeButtonRick>
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

export default SecurityScreen;
