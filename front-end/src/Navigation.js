import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './components/Auth/WelcomeScreen';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Feed from './components/Home/Feed';
import Trending from './components/Home/Trending';
import LatestPosts from './components/Home/LatestPosts';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen name="LatestPosts" component={LatestPosts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
