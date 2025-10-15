import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const COURSES = [
  {
    id: '1',
    title: 'Intro to React Native',
    description: 'Learn the basics of React Native and build your first app.',
    progress: 80,
  },
  {
    id: '2',
    title: 'Advanced JavaScript',
    description: 'Deep dive into advanced concepts of JavaScript.',
    progress: 40,
  },
  {
    id: '3',
    title: 'UI/UX for Developers',
    description: 'Design beautiful and user-friendly interfaces.',
    progress: 0,
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
            <View style={styles.row}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.progress}%</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#b39ddb',
  },
  badgeText: {
    color: '#b39ddb',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#b39ddb',
    padding: 16,
  },
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#d1c4e9',
    marginBottom: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#fff',
  },
  desc: {
    fontSize: 14,
    color: '#fff',
  },
});