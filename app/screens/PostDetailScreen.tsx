import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_layout";

type Props = NativeStackScreenProps<RootStackParamList, "PostDetail">;

export default function PostDetailScreen({ route }: Props) {
  const { title, content } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: 24, fontWeight: 'bold' }]}>{title}</Text>
        <Text style={styles.body}>{content}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
