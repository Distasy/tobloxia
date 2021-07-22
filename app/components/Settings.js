import React from 'react';
import { View, StyleSheet, ScrollView, Share, Linking } from 'react-native';
import { List } from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = (props) => {
    const logout =(props)=>{
      AsyncStorage.removeItem("token").then(()=>{
        props.navigation.replace("Welcome")
      })
  }
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: "Viens tester l'application ToBloxia et gagne un max de Robux ! https://tobloxia.fr",
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
  return (
    <ScrollView style={styles.container}>
            <View>
                <List.Section>
                    <List.Subheader style={{color: "black"}}>Compte</List.Subheader>
                    <List.Item 
                      titleStyle={{color: "black"}} 
                      title="Informations" left={() => <List.Icon color="black" icon="account-circle" />} 
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => props.navigation.navigate('AccountInfos')}
                    />
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Sécurité"
                      left={() => <List.Icon color="black" icon="lock" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => props.navigation.navigate('AccountSecurity')}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "black"}}>Suivi</List.Subheader>
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Annonces"
                      left={() => <List.Icon color="black" icon="newspaper" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => props.navigation.navigate('AccountAdvertisement')}
                    />
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Jeux"
                      left={() => <List.Icon color="black" icon="gamepad-variant" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => props.navigation.navigate('AccountGames')}
                    />
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Commandes"
                      left={() => <List.Icon color="black" icon="shopping-search" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => props.navigation.navigate('AccountOrders')}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "black"}}>Informations</List.Subheader>
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Conditions"
                      left={() => <List.Icon color="black" icon="file-document" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => WebBrowser.openBrowserAsync('https://tobloxia.fr/terms/cgu.php')}
                    />
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Confidentialité"
                      left={() => <List.Icon color="black" icon="file-document" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => WebBrowser.openBrowserAsync('https://tobloxia.fr/terms/confidentiality.php')}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "black"}}>Soutien</List.Subheader>
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Faire un don"
                      left={() => <List.Icon color="black" icon="heart" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                    />
                    <List.Item 
                      titleStyle={{color: "black"}} 
                      title="Partager l'application !" left={() => <List.Icon color="black" icon="share" />} 
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={onShare}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "black"}}>Support</List.Subheader>
                    <List.Item 
                      titleStyle={{color: "black"}} 
                      title="Signaler un bug" left={() => <List.Icon color="black" icon="bug" />} 
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => props.navigation.navigate('AppBugs')}
                    />
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Rejoindre le serveur Discord"
                      left={() => <List.Icon color="black" icon="discord" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => WebBrowser.openBrowserAsync('https://groupe.tobloxia.fr')}
                    />
                </List.Section>

                <List.Section>
                    <List.Subheader style={{color: "black"}}>Déconnexion</List.Subheader>
                    <List.Item
                      titleStyle={{color: "black"}}
                      title="Se déconnecter"
                      left={() => <List.Icon color="black" icon="logout" />}
                      right={() => <List.Icon color="black" icon="arrow-right" />}
                      onPress={() => logout(props)}
                    />
                </List.Section>
            </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1"
    }
})

export default Settings;