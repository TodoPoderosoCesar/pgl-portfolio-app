import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HeaderNav from './components/HeaderNav';
import InfoTab from './components/InfoTab';
import RepoTab from './components/RepoTab';
import { PROFILE, INTERESTS } from './data/profile';
import { Tab } from './types/Tab';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('info');

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <HeaderNav
        title="My Portfolio App"
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <View style={styles.body}>
        {activeTab === 'info' ? (
          <InfoTab
            avatar={PROFILE.avatar}
            description={PROFILE.description}
            interests={INTERESTS}
          />
        ) : (
          <RepoTab repoUrl={PROFILE.repoUrl} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  body: {
    flex: 1,
  },
});
