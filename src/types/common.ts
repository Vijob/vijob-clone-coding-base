import React from 'react';
import { Params } from 'next/dist/server/request/params';

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type UseState<T> = [T, SetState<T>];

export type RouteParams = {
  locale: string;
} & Params;

export interface TranslationResponse {
  alternatives: string[];
  detectedLanguage: {
    confidence: number;
    language: string;
  };
  translatedText: string;
}
