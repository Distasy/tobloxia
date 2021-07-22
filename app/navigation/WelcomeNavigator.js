import React,{useEffect} from 'react'
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const image = { uri: 'https://media.discordapp.net/attachments/519799997534044170/835490890385981460/splashscreenTobloxia.png?width=263&height=468' }
const screen = Dimensions.get("screen");

const WelcomeNavigator = (props) => {
    const detectLogin= async ()=>{
        const token = await AsyncStorage.getItem('token')
            if(token){
                  props.navigation.replace("Home")
            }
      }
      useEffect(()=>{
       detectLogin()
      },[])
    return (
        <SafeAreaView style={styles.container}>
            {/* Header with Linear Gradient */}
            <View style={{ flex: 5 }}>
                <ImageBackground source={image} style={styles.image}>
                    <LinearGradient
                        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.25)', 'rgba(0,0,0,0.75)', 'rgba(0,0,0,1)']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            height: '100%',
                        }}
                    />
                    <View style={styles.introContainer}>
                        <Text style={styles.title}>ToBloxia</Text>
                        <Text style={styles.subtitle}>Rejoignez la communauté et commencez à gagnez des Robux dès maintenant ! C'est simple et gratuit :D</Text>
                    </View>
                </ImageBackground>
            </View>
            {/* End of Header with Linear Gradient */}
            <View style={{ flex: 1, padding: 20 }}>
                {/* Facebook Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        style={[styles.button, {
                            backgroundColor: '#55efc4'
                        }]}
                        onPress={() => props.navigation.navigate('Register')}>
                        <FontAwesome5 name="user-plus" size={20} color="#fff" />
                        <Text style={styles.buttonText}>CREER UN COMPTE</Text>
                    </TouchableOpacity>
                </View>

                {/* Email Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        activeOpacity={.5}
                        style={[styles.button, {
                            backgroundColor: '#1A1A1A'
                        }]}
                        onPress={() => props.navigation.navigate('Login')}
                        >
                        <FontAwesome5 name="sign-in-alt" size={20} color="#fff" />
                        <Text style={styles.buttonText}>CONNEXION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    image: {
        width: screen.width,
        height: '100%'
    },
    introContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 4
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(175,175,175, 1)',
        textAlign: 'center',
        width: screen.width - 80,
        fontWeight: 'bold'
    },
    buttonContainer: {
        paddingHorizontal: 0,
        paddingVertical: 4,
        backgroundColor: 'transparent',
        height: 54,

    },
    button: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 10
    }
})

export default WelcomeNavigator;