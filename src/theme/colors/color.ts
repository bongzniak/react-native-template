import { useColorScheme } from 'react-native';

import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';

export interface ColorsInterface {
  current: {
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      'primary-a': string;
      'secondary-a': string;
      'tertiary-a': string;
      'quaternary-a': string;
      red: string;
      blue: string;
      'invert-a': string;
      green: string;
      yellow: string;
      grey: string;
    };
    icon: {
      primary: string;
      'secondary-a': string;
      'tertiary-a': string;
      'quaternary-a': string;
      red: string;
      blue: string;
      green: string;
      invert: string;
      yellow: string;
      grey: string;
    };
    border: {
      'divider-weaker': string;
      'weak-a': string;
      'default-a': string;
      'strong-a': string;
      stronger: string;
      red: string;
      'red-weak-a': string;
      blue: string;
      'blue-weak-a': string;
      green: string;
      'green-weak-a': string;
      yellow: string;
      'yellow-weak-a': string;
      grey: string;
      'grey-weak-a': string;
      invert: string;
    };
    bg: {
      base: string;
      elevated: string;
      'grouped-weak': string;
      'grouped-strong': string;
      highlight: string;
      'invert-weak-a': string;
      'grouped-weak-a': string;
      'blue-grey': string;
    };
    surface: {
      card: string;
      'form-primary-a': string;
      'form-secondary-a': string;
      'form-red': string;
      'form-red-weak-a': string;
      'form-blue': string;
      'form-blue-weak-a': string;
      'form-green': string;
      'form-green-weak-a': string;
      'display-bar-top': string;
      'display-bar-bottom': string;
      'display-lock': string;
      'form-inverted': string;
      'form-inverted-deep': string;
      'form-gradient-h': string;
      'form-yellow': string;
      'form-yellow-weak-a': string;
      'form-grey': string;
      'form-grey-weak-a': string;
    };
    service: {
      membership: string;
      'membership-weak-a': string;
      live: string;
      'live-weak-a': string;
      noti: string;
      'pop-bg': string;
    };
    overlay: {
      'hover-a': string;
      'press-a': string;
      'hover-grey-a': string;
      'press-grey-a': string;
    };
  };
  always: {
    white100: string;
    'white080-a': string;
    'white060-a': string;
    'white050-a': string;
    'white030-a': string;
    'white020-a': string;
    'white015-a': string;
    'white010-a': string;
    'white006-a': string;
    black100: string;
    'black080-a': string;
    'black060-a': string;
    'black050-a': string;
    'black030-a': string;
    'black020-a': string;
    'black015-a': string;
    'black010-a': string;
    'black006-a': string;
    lightgrey100: string;
    grey085: string;
    'lightgrey080-a': string;
    'lightgrey050-a': string;
    'lightgrey030-a': string;
    'lightgrey020-a': string;
    'lightgrey015-a': string;
    'lightgrey010-a': string;
    'lightgrey006-a': string;
    'grey-strong': string;
    palette05: string;
    service: {
      'live-red': string;
      'red080-a': string;
      point: string;
      'survey-thumb-a': string;
      'post-thumb-a': string;
      ticket: string;
      survey: string;
      'pop-ing': string;
      'popgrey-weak-a': string;
      mnet: string;
      mnetapp: string;
      'live-pop': string;
    };
    avatar: {
      bg01: string;
      bg02: string;
      bg03: string;
      bg04: string;
      bg05: string;
      bg06: string;
      bg07: string;
      bg08: string;
      bg09: string;
      bg10: string;
      bg11: string;
      bg12: string;
      bg13: string;
      bg14: string;
      bg15: string;
      bg16: string;
      bg17: string;
      bg18: string;
      bg19: string;
      bg20: string;
      bg21: string;
    };
  };
  auto: {
    text: {
      'primary-on-light': string;
      'secondary-on-light': string;
      'primary-on-dark': string;
      'secondary-on-dark': string;
    };
    icon: {
      'primary-on-light': string;
      'secondary-on-light': string;
      'primary-on-dark': string;
      'secondary-on-dark': string;
    };
  };
  picker: {
    button: string;
    star: string;
    'on-button': string;
    'button-weak-a': string;
  };
}

// ✅ Proxy를 사용하여 객체처럼 다크/라이트 테마 색상 가져오기
const createThemeProxy = (theme: any) =>
  new Proxy(theme, {
    get(target, prop) {
      const replaceProp = prop === 'theme' ? 'current' : prop;
      const value = target?.[replaceProp];

      if (typeof value === 'object') {
        if (Array.isArray(value.value)) {
          return hexToRGBA(value.value); // ✅ Shadow 같은 배열 값을 직접 반환
        }

        if ('value' in value) {
          return hexToRGBA(value.value); // ✅ 일반 색상 값 반환
        }

        return createThemeProxy(value); // ✅ 중첩된 객체 지원
      }

      return hexToRGBA(value.value);
    },
  });

const hexToRGBA = (hex: string): string => {
  let cleanHex = hex.replace('#', '');

  // 3자리 or 4자리 → 6자리 or 8자리로 확장
  if (cleanHex.length === 3 || cleanHex.length === 4) {
    cleanHex = cleanHex
      .split('')
      .map(c => c + c)
      .join('');
  }

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  const a =
    cleanHex.length === 8 ? parseInt(cleanHex.substring(6, 8), 16) / 255 : 1;

  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
};

// ✅ 현재 테마에 맞는 색상을 자동으로 적용하는 훅
export const useColors = (): ColorsInterface => {
  const colorScheme = useColorScheme();
  return createThemeProxy(colorScheme === 'dark' ? DarkTheme : LightTheme);
};
