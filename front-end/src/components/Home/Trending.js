import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const imageData = [
  { id: '1', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img1.jpg') },
  { id: '2', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img2.jpg') },
  { id: '3', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img3.jpg') },
  { id: '4', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img4.jpg') },
  { id: '5', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img5.jpg') },
  { id: '6', source: require('/Users/marwah/Desktop/App-f/my-pic/assets/img6.jpg') },
];

const Trending = () => {
  const [posts, setPosts] = useState(imageData.map(post => ({ ...post, likes: 0, comments: [] })));

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleComment = (id, comment) => {
    if (comment.trim() === '') return;
    setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts Tendance 🌸🧸</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={item.source} style={styles.image} />
            
            <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.likeButton}>
              <Text style={styles.likeText}>❤️ {item.likes}</Text>
            </TouchableOpacity>

            <View style={styles.commentSection}>
              {item.comments.map((comment, index) => (
                <Text key={index} style={styles.comment}>{comment}</Text>
              ))}
              <TextInput
                style={styles.input}
                placeholder="Ajouter un commentaire..."
                onSubmitEditing={(event) => handleComment(item.id, event.nativeEvent.text)}
              />
            </View>
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
    marginBottom: 20,
    fontFamily: 'Cochin',
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
    width: 320,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  list: {
    width: '100%',
  },
  likeButton: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#FF69B4',
  },
  likeText: {
    fontSize: 16,
    color: 'white',
  },
  commentSection: {
    marginTop: 10,
    width: '100%',
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  comment: {
    fontSize: 14,
    color: '#333',
    padding: 2,
  },
  input: {
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingVertical: 5,
    fontSize: 14,
  },
});

export default Trending;