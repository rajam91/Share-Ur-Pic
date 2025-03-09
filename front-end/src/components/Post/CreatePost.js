import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Importer AsyncStorage

const CreatePost = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleCreatePost = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Remplacer localStorage par AsyncStorage
      if (!token) {
        console.error('Token non trouvé');
        return;
      }

      await axios.post('http://localhost:4001/posts', 
        { title, description, tags },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <TextInput placeholder="Titre" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput placeholder="Tags" value={tags} onChangeText={setTags} />
      <Button title="Créer le post" onPress={handleCreatePost} />
    </View>
  );
};

export default CreatePost;
