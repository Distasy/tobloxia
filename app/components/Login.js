import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = (props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
    
    
    const sendCred = async (props)=>{
      fetch("https://ddfefadfb68a.ngrok.io/api/auth/login",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
         "_id": id,
         "email":email, 
         "password":password
       })
      })
      .then(res=>res.json())
      .then(async (data)=>{
             try {
               await AsyncStorage.setItem('token',data.token)
               props.navigation.replace("Home")
             } catch (e) {
               console.log("error hai",e)
               Alert.alert(
                "Erreur",
                "L'e-mail ou le mot de passe est incorrect.",
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
                <Text style={styles.titleRegister}>Connnexion</Text>

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

                    <TextInput
                        theme={{ colors: { primary: '#4cd7b0',underlineColor:'transparent',}}}
                        mode='outlined'
                        secureTextEntry={true}
                        label="Mot de passe"
                        placeholder="Votre mot de passe"
                        left={
                            <TextInput.Icon
                            name="lock"
                            />
                        }
                        style={{marginBottom: "5%"}}
                        value={password}
                        onChangeText={(text)=>{setPassword(text)}}
                    />

                    
                    <Text style={{color: "#767878", fontWeight: "bold" }}>Mot de passe oublié ? <Text onPress={() => props.navigation.navigate('ResetPassword')} style={{color: "#55efc4", fontWeight: "bold"}}>Changez-le !</Text></Text>

                    <View style={styles.confirmBox}>
                        <AwesomeButtonRick onPress={() => sendCred(props)} width='100%' textSize={20} textColor="white" backgroundColor="#55efc4" backgroundDarker="#00b894">Se connecter</AwesomeButtonRick>
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
});

export default Register;