import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const COURSES = [
  {
    id: '1',
    title: 'Intro to React Native',
    description: 'Learn the basics of React Native and build your first app.',
  },
  {
    id: '2',
    title: 'Advanced JavaScript',
    description: 'Deep dive into advanced concepts of JavaScript.',
  },
  {
    id: '3',
    title: 'UI/UX for Developers',
    description: 'Design beautiful and user-friendly interfaces.',
  },
];

export default function CourseListScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => navigation.navigate('CourseDetail', { courseId: item.id, title: item.title, description: item.description })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: '#666',
  },
});