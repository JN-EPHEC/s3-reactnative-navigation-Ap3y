import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PRODUCTS = [
  {
    id: '1',
    name: 'Laptop',
    price: 999.99,
    description: 'A powerful laptop for all your computing needs.',
  },
  {
    id: '2',
    name: 'Mouse',
    price: 29.99,
    description: 'Ergonomic wireless mouse with precision tracking.',
  },
  {
    id: '3',
    name: 'Keyboard',
    price: 79.99,
    description: 'Mechanical keyboard with RGB backlight.',
  },
];

export default function ProductListScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
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
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
});