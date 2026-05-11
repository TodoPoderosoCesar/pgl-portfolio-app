import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type RepoTabProps = {
  repoUrl: string;
};

export default function RepoTab({ repoUrl }: RepoTabProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escanea para ver mi repositorio</Text>
      <View style={styles.qrWrapper}>
        <QRCode value={repoUrl} size={200} />
      </View>
      <Text style={styles.url}>{repoUrl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    paddingBottom: 40,
  },
  qrWrapper: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },
  url: {
    fontSize: 13,
    color: '#888',
    fontStyle: 'italic',
  },
});
