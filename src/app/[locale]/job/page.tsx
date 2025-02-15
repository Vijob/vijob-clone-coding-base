import React from 'react';
import Job from '@/app/[locale]/job/Job';

// async function translateText(text: string, targetLanguage: string): Promise<string> {
//   try {
//     const response = await vijobAxiosInstance.post(GOOGLE_TRANSLATE_URL, {
//       q: text,
//       target: targetLanguage,
//       key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY // 환경 변수로 API key 전달
//     });
//
//     return response.data.data.translations[0].translatedText;
//   } catch (error) {
//     console.error('Translation failed:', error);
//     throw new Error('Translation failed');
//   }
// }

export default async function Page(): Promise<React.JSX.Element> {
  // const translationResponse: TranslationResponse = await fetchTranslation();
  return <Job />;
}
