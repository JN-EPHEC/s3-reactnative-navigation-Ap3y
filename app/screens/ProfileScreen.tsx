import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/profile.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Amaury Peyrard</Text>
      <Text style={styles.username}>@Ap3y</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#b39ddb',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b39ddb',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  username: {
    fontSize: 16,
    color: '#fff',
  },
});