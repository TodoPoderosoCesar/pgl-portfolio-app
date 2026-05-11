import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type ProfileCardProps = {
  avatar: ImageSourcePropType;
  description: string;
};

export default function ProfileCard({ avatar, description }: ProfileCardProps) {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionTitle}>Descripción sobre mí</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  descriptionBox: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
  },
  descriptionTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 6,
    color: '#222',
  },
  descriptionText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});
