// src/components/ImageByRemote.tsx
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

type ImageByRemoteProps = {
  src: string;
  resizeMode?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  style?: any;
};

const ImageByRemote = ({
  src,
  resizeMode = 'cover',
  style,
}: ImageByRemoteProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // const fallback = require('@/assets/images/error.png');

  return (
    <View style={[styles.container, style]}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color="#aaa" />
        </View>
      )}

      <Image
        source={error ? src : src}
        style={[style, styles.image]}
        contentFit={resizeMode}
        onLoadEnd={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        transition={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  image: {
    backgroundColor: '#eee',
  },
});

export default ImageByRemote;
