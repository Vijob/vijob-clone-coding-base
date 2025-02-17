export const VIJOB_API_URL: string = process.env.NEXT_PUBLIC_VIJOB_API_URL || 'http://localhost:3000';
export const GOOGLE_API_KEY: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';
export const GOOGLE_TRANSLATE_URL: string = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_URL || '';
export const DAY_MAP: Record<string, string> = {
  MON: '월',
  TUE: '화',
  WED: '수',
  THU: '목',
  FRI: '금',
  SAT: '토',
  SUN: '일'
};
