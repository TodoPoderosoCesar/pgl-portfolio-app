import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageSourcePropType } from 'react-native';
import ProfileCard from './ProfileCard';
import InterestItem from './InterestItem';

type InfoTabProps = {
  avatar: ImageSourcePropType;
  description: string;
  interests: string[];
};

export default function InfoTab({ avatar, description, interests }: InfoTabProps) {
  return (
    <View style={styles.container}>
      <ProfileCard avatar={avatar} description={description} />

      <Text style={styles.sectionTitle}>Cosas que me gustan mucho</Text>

      <FlatList
        data={interests}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <InterestItem label={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  sectionTitle: {
    fontWeight: '900',
    textTransform: 'capitalize',
    fontSize: 18,
    textAlign: 'center',
    color: '#222',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
