import React from 'react';
import { Text, StyleSheet } from 'react-native';

type InterestItemProps = {
  label: string;
};

export default function InterestItem({ label }: InterestItemProps) {
  return <Text style={styles.item}>{label}</Text>;
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#999',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 18,
    color: '#8b0000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 15,
    backgroundColor: '#e8e8e8',
    marginBottom: 6,
    borderRadius: 4,
  },
});
