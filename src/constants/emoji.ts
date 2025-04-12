// constants/emoji.ts

export type EmojiCategory =
  | 'exercise'
  | 'study'
  | 'hobby'
  | 'lifestyle'
  | 'mind'
  | 'emotion';

export interface EmojiItem {
  emoji: string;
  label: string; // i18n key
  mood?: 'positive' | 'neutral' | 'negative';
}

export const EMOJI_CATEGORIES: Record<
  EmojiCategory,
  { title: string; data: EmojiItem[] }
> = {
  exercise: {
    title: 'emoji.category.exercise',
    data: [
      { emoji: '🏃', label: 'emoji.exercise.running' },
      { emoji: '🏋️‍♂️', label: 'emoji.exercise.gym' },
      { emoji: '🚴', label: 'emoji.exercise.cycling' },
      { emoji: '🏊', label: 'emoji.exercise.swimming' },
      { emoji: '🤸', label: 'emoji.exercise.stretching' },
      { emoji: '🧘‍♀️', label: 'emoji.exercise.yoga' },
      { emoji: '🥾', label: 'emoji.exercise.hiking' },
      { emoji: '⛹️', label: 'emoji.exercise.basketball' },
      { emoji: '⚽️', label: 'emoji.exercise.soccer' },
      { emoji: '🧗', label: 'emoji.exercise.climbing' },
    ],
  },
  study: {
    title: 'emoji.category.study',
    data: [
      { emoji: '📚', label: 'emoji.study.reading' },
      { emoji: '🧠', label: 'emoji.study.learning' },
      { emoji: '💻', label: 'emoji.study.coding' },
      { emoji: '📝', label: 'emoji.study.writing' },
      { emoji: '✍️', label: 'emoji.study.notetaking' },
      { emoji: '🎓', label: 'emoji.study.lecture' },
      { emoji: '📖', label: 'emoji.study.textbook' },
      { emoji: '🧮', label: 'emoji.study.math' },
      { emoji: '🔬', label: 'emoji.study.lab' },
    ],
  },
  hobby: {
    title: 'emoji.category.hobby',
    data: [
      { emoji: '🎨', label: 'emoji.hobby.drawing' },
      { emoji: '🎸', label: 'emoji.hobby.instrument' },
      { emoji: '🎮', label: 'emoji.hobby.game' },
      { emoji: '📷', label: 'emoji.hobby.photography' },
      { emoji: '🧵', label: 'emoji.hobby.sewing' },
      { emoji: '🧶', label: 'emoji.hobby.knitting' },
      { emoji: '🪴', label: 'emoji.hobby.gardening' },
      { emoji: '🧩', label: 'emoji.hobby.puzzle' },
      { emoji: '🎭', label: 'emoji.hobby.theater' },
      { emoji: '📹', label: 'emoji.hobby.video' },
    ],
  },
  lifestyle: {
    title: 'emoji.category.lifestyle',
    data: [
      { emoji: '🧹', label: 'emoji.lifestyle.cleaning' },
      { emoji: '🧼', label: 'emoji.lifestyle.washing' },
      { emoji: '🧺', label: 'emoji.lifestyle.laundry' },
      { emoji: '🛒', label: 'emoji.lifestyle.shopping' },
      { emoji: '💧', label: 'emoji.lifestyle.hydration' },
      { emoji: '⏰', label: 'emoji.lifestyle.earlywake' },
      { emoji: '🚶', label: 'emoji.lifestyle.walk' },
      { emoji: '🛏️', label: 'emoji.lifestyle.bedmaking' },
      { emoji: '🧽', label: 'emoji.lifestyle.dishes' },
    ],
  },
  mind: {
    title: 'emoji.category.mind',
    data: [
      { emoji: '🧘', label: 'emoji.mind.meditation' },
      { emoji: '🛌', label: 'emoji.mind.rest' },
      { emoji: '❤️‍🩹', label: 'emoji.mind.emotioncare' },
      { emoji: '🏥', label: 'emoji.mind.hospital' },
      { emoji: '💊', label: 'emoji.mind.medicine' },
      { emoji: '🤒', label: 'emoji.mind.sick' },
      { emoji: '🩺', label: 'emoji.mind.healthcheck' },
      { emoji: '📵', label: 'emoji.mind.digitaldetox' },
    ],
  },
  emotion: {
    title: 'emoji.category.emotion',
    data: [
      { emoji: '😄', label: 'emoji.emotion.happy', mood: 'positive' },
      { emoji: '😊', label: 'emoji.emotion.satisfied', mood: 'positive' },
      { emoji: '💪', label: 'emoji.emotion.proud', mood: 'positive' },
      { emoji: '😤', label: 'emoji.emotion.energetic', mood: 'positive' },
      { emoji: '😎', label: 'emoji.emotion.chill', mood: 'positive' },
      { emoji: '😌', label: 'emoji.emotion.calm', mood: 'neutral' },
      { emoji: '😶‍🌫️', label: 'emoji.emotion.blank', mood: 'neutral' },
      { emoji: '🥱', label: 'emoji.emotion.tired', mood: 'neutral' },
      { emoji: '😓', label: 'emoji.emotion.struggle', mood: 'negative' },
      { emoji: '😭', label: 'emoji.emotion.tearful', mood: 'negative' },
      { emoji: '😠', label: 'emoji.emotion.angry', mood: 'negative' },
      { emoji: '🤯', label: 'emoji.emotion.overwhelmed', mood: 'negative' },
      { emoji: '🥹', label: 'emoji.emotion.moved', mood: 'positive' },
    ],
  },
};
