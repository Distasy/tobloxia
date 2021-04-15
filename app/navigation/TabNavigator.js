import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import WelcomeNavigator from './WelcomeNavigator';
import Games from '../components/Games';
import Shop from '../components/Shop';
import Social from '../components/Social';
import GamesFetch from '../components/Cards/Games/GamesFetch';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    
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
        component={Shop}
        initialParams={{ icon: 'shop' }}
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
  );
};

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerTransparent: true, title: '' }}>
      <Stack.Screen name='Welcome' component={WelcomeNavigator} />
      <Stack.Screen options={{headerShown: false}} name='Home' component={TabNavigator} />
      <Stack.Screen name='Games' component={GamesFetch} />
    </Stack.Navigator>
  );
};

export default StackNav;
