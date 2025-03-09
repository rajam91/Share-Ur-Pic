import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('/Users/marwah/Desktop/App-f/my-pic/assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenue sur l'application !</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Trending')}>
        <Text style={styles.buttonOutlineText}>Continuer sans compte</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD1DC', 
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A0572', 
    marginBottom: 30,
    fontFamily: 'Cochin', 
  },
  button: {
    backgroundColor: '#FFB6C1', 
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: '#FFB6C1',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonOutlineText: {
    color: '#6A0572',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
});
