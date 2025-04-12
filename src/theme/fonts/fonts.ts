// useFont.ts
import { fontConfig, FontKey, FontStyle } from './fontConfig';

export const useFonts = (): Record<FontKey, FontStyle> => {
  // 모든 폰트 스타일 반환
  const allFonts = Object.keys(fontConfig).reduce(
    (acc, key) => {
      const fontKey = key as FontKey; // key를 FontKey로 타입 캐스팅
      const fontStyle = fontConfig[fontKey]; // FontKey로 접근

      // TODO: 폰트 높이 조절 처리
      fontStyle.lineHeight = undefined;

      acc[fontKey] = {
        ...fontStyle,
      };
      return acc;
    },
    {} as Record<FontKey, FontStyle>,
  );

  return allFonts;
};
