import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const InfosScreen = () => {
const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
        <View style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 20 }}>
            
            <TextInput
                theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                mode='outlined'
                label="Pseudonyme"
                placeholder="Votre pseudo Roblox"
                left={
                    <TextInput.Icon
                        name="account"
                    />
                }
                style={{marginBottom: "5%"}}
            />

            <TextInput
                theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                mode='outlined'
                label="Adresse e-mail"
                placeholder="Votre adresse e-mail"
                left={
                    <TextInput.Icon
                        name="email"
                    />
                }
                style={{marginBottom: "5%"}}
            />

            <View style={styles.checkboxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.label}>Je souhaite être informé des nouveautés de ToBloxia par e-mail.</Text>
            </View>

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

export default InfosScreen;
