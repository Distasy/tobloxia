import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

const ResetPassword = (props) => {
    const [email,setEmail] = useState('');
    
    const sendCred = async (props)=>{
      fetch("https://ddfefadfb68a.ngrok.io/api/v1/auth/forgotpassword",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
         "email":email, 
       })
      })
      .then(res=>res.json())
      .then(async (data)=>{
             try {
                Alert.alert(
                    "Email envoyé",
                    "Veuillez vérifier votre boîte mail pour réinitialiser votre mot de passe.",
                    [
                      { text: "OK" }
                    ]
                  );
             } catch (e) {
               console.log("error hai",e)
               Alert.alert(
                "Erreur",
                "L'e-mail ne correspond à aucun utilisateur.",
                [
                  { text: "OK" }
                ]
              );
             }
      })
   }
  return (
    <ScrollView style={{ backgroundColor: "#ecf0f1" }}>
        <View style={styles.container}>
            <View style={styles.contentBox}>
                <Text style={styles.titleRegister}>Mot de passe perdu</Text>
                <Text>Dès la fin de l'opération, vous serez invité par mail à modifier le mot de passe de votre compte.</Text>

                <View style={styles.formBox}>

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
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                    />
                    
                    <View style={styles.confirmBox}>
                        <AwesomeButtonRick onPress={() => sendCred(props)} width='100%' textSize={20} textColor="white" backgroundColor="#55efc4" backgroundDarker="#00b894">Confirmer</AwesomeButtonRick>
                    </View>

                </View>
            </View>
            
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
    },
    titleRegister: {
        fontSize: 35,
        fontWeight: "bold"
    },
    contentBox: {
        marginTop: "25%"
    },
    formBox: {
        marginTop: "15%"
    },
    confirmBox: {
        marginTop: "10%"
    }
})

export default ResetPassword;