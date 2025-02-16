import React from 'react';
import { InfoBoxProps } from '@/types/job';

/**
 * UI components that display information by applying styles based on background color, text color, and label.
 * @param className - class name
 * @param label - label text
 * @constructor
 */
export default function InfoBox({ className, label }: InfoBoxProps): React.JSX.Element {
  return (
    <div className={`flex px-[7px] py-[4px] w-full ${className} rounded`}>
      <div className="font-bold text-xs whitespace-pre-line">{label}</div>
    </div>
  );
}
