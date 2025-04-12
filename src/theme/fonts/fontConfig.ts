export type FontKey =
  | '40/title/semibold'
  | '40/title/med'
  | '40/title/reg'
  | '32/title/semibold'
  | '32/title/med'
  | '32/title/reg'
  | '28/title/semibold'
  | '28/title/med'
  | '28/title/reg'
  | '24/title/semibold'
  | '24/title/med'
  | '24/title/reg'
  | '20/title/semibold'
  | '20/title/med'
  | '20/title/reg'
  | '18/title/semibold'
  | '18/title/med'
  | '18/title/reg'
  | '16/title/semibold'
  | '16/title/med'
  | '16/title/reg'
  | '15/title/semibold'
  | '15/title/med'
  | '15/title/reg'
  | '17/body28/semibold'
  | '17/body28/med'
  | '17/body28/reg'
  | '17/body/semibold'
  | '17/body/med'
  | '17/body/reg'
  | '15/body/semibold'
  | '15/body/med'
  | '15/body/reg'
  | '14/body/semibold'
  | '14/body/med'
  | '14/body/reg'
  | '13/body/semibold'
  | '13/body/med'
  | '13/body/reg'
  | '12/caption/semibold'
  | '12/caption/med'
  | '12/caption/reg'
  | '11/caption/semibold'
  | '11/caption/med'
  | '11/caption/reg';

export type FontStyle = {
  fontFamily: string;
  fontSize: number;
  fontStyle: 'normal' | 'italic';
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  lineHeight?: number;
  letterSpacing?: number;
};

export const fontConfig: Record<FontKey, FontStyle> = {
  '40/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 48,
    letterSpacing: -0.6,
  },
  '40/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 48,
    letterSpacing: -0.6,
  },
  '40/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 40,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 48,
    letterSpacing: -0.6,
  },
  '32/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 38,
    letterSpacing: -0.48,
  },
  '32/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 38,
  },
  '32/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 38,
    letterSpacing: -0.48,
  },
  '28/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 34,
    letterSpacing: -0.42,
  },
  '28/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 34,
    letterSpacing: -0.42,
  },
  '28/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 34,
  },
  '24/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: -0.12,
  },
  '24/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  '24/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: -0.12,
  },
  '20/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.1,
  },
  '20/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
  },
  '20/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: -0.1,
  },
  '18/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: -0.09,
  },
  '18/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.09,
  },
  '18/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.09,
  },
  '16/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
  },
  '16/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
  },
  '16/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  '15/title/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  '15/title/med': {
    fontFamily: 'Pretendard',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  '15/title/reg': {
    fontFamily: 'Pretendard',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  '17/body28/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 28,
  },
  '17/body28/med': {
    fontFamily: 'Pretendard',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
  },
  '17/body28/reg': {
    fontFamily: 'Pretendard',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28,
  },
  '17/body/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 26,
  },
  '17/body/med': {
    fontFamily: 'Pretendard',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 26,
  },
  '17/body/reg': {
    fontFamily: 'Pretendard',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 26,
  },
  '15/body/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 22,
  },
  '15/body/med': {
    fontFamily: 'Pretendard',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
  },
  '15/body/reg': {
    fontFamily: 'Pretendard',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
  },
  '14/body/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
  },
  '14/body/med': {
    fontFamily: 'Pretendard',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
  },
  '14/body/reg': {
    fontFamily: 'Pretendard',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
  },
  '13/body/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
  },
  '13/body/med': {
    fontFamily: 'Pretendard',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
  },
  '13/body/reg': {
    fontFamily: 'Pretendard',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
  },
  '12/caption/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
  '12/caption/med': {
    fontFamily: 'Pretendard',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16,
  },
  '12/caption/reg': {
    fontFamily: 'Pretendard',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
  },
  '11/caption/semibold': {
    fontFamily: 'Pretendard',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 14,
  },
  '11/caption/med': {
    fontFamily: 'Pretendard',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
  },
  '11/caption/reg': {
    fontFamily: 'Pretendard',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
  },
};
