export interface LocalizedString {
  en: string;
  es: string;
}

export interface LevelOption {
  en: string;
  es: string;
}

export interface Evidence {
  type: 'image_title' | 'text' | 'data_sheet' | 'sms' | 'note' | 'legal_text' | 'narrative' | 'summary';
  title?: LocalizedString;
  content: string | string[] | Record<string, string>[];
  imageUrl?: string;
}

export interface Level {
  id: number;
  strategy: LocalizedString;
  evidence: Evidence;
  instruction: LocalizedString;
  question: LocalizedString;
  options: LevelOption[];
  correctAnswerIndex: number;
}

export interface Case {
  title: LocalizedString;
  imageUrl: string;
  levels: Level[];
}

export type GameState = 'manual' | 'start' | 'playing' | 'feedback' | 'won' | 'lost' | 'gameOver';

export interface Translations {
  title: string;
  start_button: string;
  lives: string;
  time: string;
  level: string;
  reading_strategy: string;
  toggle_language: string;
  correct: string;
  incorrect: string;
  next_level: string;
  case_closed_win: string;
  case_closed_lose: string;
  win_message: string;
  lose_message_time: string;
  lose_message_lives: string;
  play_again: string;
  correct_answer_was: string;
  all_cases_solved: string;
  final_message: string;
  return_to_start: string;
  finish_investigation: string;
  manual_title: string;
  accept_mission: string;
}