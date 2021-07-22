import React,{useEffect,useState} from 'react';
import { View, StatusBar, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../components/Home';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import WelcomeNavigator from './WelcomeNavigator';
import Games from '../components/Games';
import Advertisement from '../components/Advertisement';
import Social from '../components/Social';
import { Appbar } from 'react-native-paper';
import { Host } from 'react-native-portalize';
import Settings from '../components/Settings';
import Login from '../components/Login';
import Register from '../components/Register';
import ResetPassword from '../components/ResetPassword';
import InfosScreen from '../components/Settings/InfosScreen';
import SecurityScreen from '../components/Settings/SecurityScreen';
import AdvertisementScreen from '../components/Settings/AdvertisementScreen';
import GamesScreen from '../components/Settings/GamesScreen';
import OrdersScreen from '../components/Settings/OrdersScreen';
import BugsScreen from '../components/Settings/BugsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const TabNavigator = ({navigation}) => {
  return (
    <View style={{ flex: 1, position: "relative"}}>
      <StatusBar backgroundColor="#636e72" />
      <Appbar.Header statusBarHeight={0} style={{backgroundColor: "#636e72"}}>
          <Appbar.Action onPress={ () => navigation.navigate('Profil') } icon="account-circle" size={25} color="#fff" />
          <Appbar.Content title={null} />
          <Text style={{color: "#FFF", fontWeight: "bold", backgroundColor: "rgba(85,	239,	196, 0.5)", padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20}}>750 TBX</Text>
          <Appbar.Action onPress={ () => navigation.navigate('Settings') } icon="cog" size={25} color="#fff" />
      </Appbar.Header>
      <Host>
        <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props} />}>
          <Tab.Screen
            name='Accueil'
            component={Home}
            initialParams={{ icon: 'home' }}
          />
          <Tab.Screen
            name='Jeux'
            component={Games}
            initialParams={{ icon: 'game-controller' }}
          />
          <Tab.Screen
            name='Boutique'
            component={Advertisement}
            initialParams={{ icon: 'documents' }}
          />
          <Tab.Screen
            name='Réseaux'
            component={Social}
            initialParams={{ icon: 'share' }}
          />
          <Tab.Screen
            name='Profil'
            component={Profile}
            initialParams={{ icon: 'user' }}
          />
        </Tab.Navigator>
      </Host>
    </View>
  );
};

const Stack = createStackNavigator();

const StackNav = () => {
  const [isloggedin,setLogged] = useState(null)

  const detectLogin= async ()=>{
     const token = await AsyncStorage.getItem('token')
     if(token){
         setLogged(true)
     }else{
         setLogged(false)
     }
  }
 useEffect(()=>{
    detectLogin()
 },[])
  return (
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ title: '' }}>
        <Stack.Screen name='Welcome' options={{headerShown: false}} component={WelcomeNavigator} />
        <Stack.Screen name='Login' options={{ headerTransparent: true, headerTintColor:"#333" }} component={Login} />
        <Stack.Screen name='Register' options={{ headerTransparent: true, headerTintColor:"#333" }} component={Register} />
        <Stack.Screen name='ResetPassword' options={{ headerTransparent: true, headerTintColor:"#333" }} component={ResetPassword} />
        <Stack.Screen options={{headerShown: false}} name='Home' component={TabNavigator} />

        <Stack.Screen name='Settings'  options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: '#636e72'}, 
          headerTintColor:"#FFF", title: "Paramètres"}} 
          component={Settings} />
        
        <Stack.Screen name='AccountInfos'  options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: '#636e72'}, 
          headerTintColor:"#FFF", 
          title: "Informations du compte"
        }} component={InfosScreen} />
        
        <Stack.Screen name='AccountSecurity'  options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: '#636e72'}, 
          headerTintColor:"#FFF", 
          title: "Sécurité du compte"
        }} component={SecurityScreen} />

        <Stack.Screen name='AccountAdvertisement'  options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: '#636e72'}, 
          headerTintColor:"#FFF", 
          title: "Mes annonces"
        }} component={AdvertisementScreen} />

        <Stack.Screen name='AccountGames'  options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: '#636e72'}, 
          headerTintColor:"#FFF", 
          title: "Mes jeux"
        }} component={GamesScreen} />

        <Stack.Screen name='AccountOrders'  options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: '#636e72'}, 
          headerTintColor:"#FFF", 
          title: "Mes commandes"
        }} component={OrdersScreen} />

        <Stack.Screen name='AppBugs'  options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { backgroundColor: '#636e72'}, 
          headerTintColor:"#FFF", 
          title: "Signaler un bug"
        }} component={BugsScreen} />

      </Stack.Navigator>
  );
};

export default StackNav;
