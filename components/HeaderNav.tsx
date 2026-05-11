import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Tab } from '../types/Tab';

type HeaderNavProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  title: string;
};

export default function HeaderNav({ activeTab, onTabChange, title }: HeaderNavProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.tabBar}>
        <Pressable
          style={[styles.tab, activeTab === 'info' && styles.tabActive]}
          onPress={() => onTabChange('info')}
        >
          <Text style={[styles.tabText, activeTab === 'info' && styles.tabTextActive]}>
            Mi Info
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === 'repo' && styles.tabActive]}
          onPress={() => onTabChange('repo')}
        >
          <Text style={[styles.tabText, activeTab === 'repo' && styles.tabTextActive]}>
            Mi Repo
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 50,
    backgroundColor: '#3a3a3a',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    paddingVertical: 10,
    letterSpacing: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#aaa',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: 13,
  },
  tabTextActive: {
    color: '#fff',
  },
});
