import type { RootScreenProps } from '@/navigation/types';

import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Paths } from '@/navigation/paths';

import { SafeScreen } from '@/components/templates';

function Home({ navigation }: RootScreenProps<Paths.Home>) {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>🚀 테스트 컴포넌트 333</Text>
        <Text style={styles.subtitle}>이건 RN + TSX 테스트입니다.</Text>
      </View>
    </SafeScreen>
  );
}

useEffect(() => {}, []);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default Home;
