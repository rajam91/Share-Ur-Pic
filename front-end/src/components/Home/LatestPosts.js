import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LatestPosts = () => {
  return (
    <View style={styles.container}>
      <Text>Page des derniers posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LatestPosts;
