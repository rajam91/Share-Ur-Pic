import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const imageData = [
  { id: '1', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img1.jpg') },
  { id: '2', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img2.jpg') },
  { id: '3', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img3.jpg') },
  { id: '4', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img4.jpg') },
  { id: '5', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img5.jpg') },
  { id: '6', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img6.jpg') },
];

const Feed = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');  
      setIsLoggedIn(!!token); 
    };

    checkLoginStatus();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isLoggedIn ? 'Votre Fil d’Actualité 💖' : 'Posts Tendance 🌸'}
      </Text>
      {isLoggedIn && <Text style={styles.welcome}>Bienvenue, utilisateur connecté ! 🎉</Text>}
      
      <FlatList
        data={imageData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={item.source} style={styles.image} />
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFD1DC',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0572',
    marginBottom: 10,
    fontFamily: 'Cochin',
  },
  welcome: {
    fontSize: 18,
    color: '#6A0572',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  postContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFB6C1',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  list: {
    width: '100%',
  },
});

export default Feed;
