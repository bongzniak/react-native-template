import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { ColorsInterface, useColors } from '../colors/color';
import { FontKey, FontStyle } from '../fonts/fontConfig';
import { useFonts } from '../fonts/fonts';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export interface Theme {
  fonts: Record<FontKey, FontStyle>;
  colors: ColorsInterface;
  isDarkMode: boolean; // 다크 모드 여부 추가
}

export const ThemeContext = createContext<Theme | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const systemTheme = useColorScheme(); // 다크 모드 감지
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark'); // 다크 모드 상태 관리

  const fonts = useFonts();
  const colors = useColors();

  // 다크 모드가 변경될 때마다 상태 업데이트
  useEffect(() => {
    if (systemTheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [systemTheme]); // systemTheme이 변경될 때마다 실행

  const defaultTheme: Theme = {
    fonts: fonts,
    colors: colors,
    isDarkMode, // 다크 모드 여부
  };

  return (
    <ThemeContext.Provider value={theme || defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
