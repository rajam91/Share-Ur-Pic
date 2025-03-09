import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4001/auth/register',
        { name, firstname, email, password },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
      console.log('Inscription réussie:', response.data);
      navigation.navigate('Login'); 
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'inscription.");
    }
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={firstname}
        onChangeText={setFirstname}
      />
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
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
