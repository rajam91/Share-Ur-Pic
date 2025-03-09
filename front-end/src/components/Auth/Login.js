import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';  

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4001/auth/login',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      if (response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        navigation.navigate('Feed');
      } else {
        setError('Erreur lors de la connexion.');
      }
    } catch (err) {
      console.error('Erreur Axios:', err.response?.data || err.message);
      setError('Error serveur');
    }
  };  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD1DC', 
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A0572', 
    marginBottom: 20,
    fontFamily: 'Cochin',
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 2,
    borderColor: '#FFB6C1',
    borderRadius: 25,
    backgroundColor: '#FFF0F5',
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Cochin',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFB6C1',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginTop: 10,
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
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Cochin',
  },
});
