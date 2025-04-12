import type { PropsWithChildren } from 'react';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import env from '@/config/env';

import { useTheme } from '@/theme';

import { DebugLabel } from '@/components/atom/index';

type Props = PropsWithChildren<Omit<SafeAreaViewProps, 'mode'>>;

function SafeScreen({ children = undefined, style, ...props }: Props) {
  const { colors, isDarkMode } = useTheme();

  const isDebug = __DEV__ || ['dev', 'qa'].includes(env.APP_ENV);

  return (
    <SafeAreaView {...props} mode="padding" style={[{ flex: 1 }, style]}>
      <StatusBar
        backgroundColor={colors.theme.bg.base}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      {children}

      {/* ✅ 개발자용 라벨 표시 */}
      {isDebug && (
        <React.Fragment>
          <DebugLabel />
        </React.Fragment>
      )}
    </SafeAreaView>
  );
}

export default SafeScreen;
