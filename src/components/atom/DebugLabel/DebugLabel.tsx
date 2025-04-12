// DebugLabel.tsx
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import env from '@/config/env';

const DebugLabel = () => {
  const title = `${env.APP_ENV}`;
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Platform.select({ ios: 44, android: 8 }),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    pointerEvents: 'none',
  },
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 4,
  },
  label: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default DebugLabel;
