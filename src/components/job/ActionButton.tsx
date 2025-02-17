import React from 'react';
import { ActionButtonProps } from '@/types/job';

/**
 * ActionButton Component
 * @param bgColor - background color
 * @param textColor - text color
 * @param label - button text
 * @param bgURL -background URL
 * @constructor
 */
export default function ActionButton({ bgColor, textColor, label, bgURL }: ActionButtonProps): React.JSX.Element {
  return (
    <div
      className={`rounded-full px-4 py-2 flex justify-center items-center cursor-pointer border ring-1 ring-inset ring-gray-100 ${bgColor} active:${bgColor}`}
    >
      <div className={`relative flex flex-row justify-center items-center gap-[4px] ${textColor}`}>
        <p className="text-sm font-bold select-none">{label}</p>
        <div className={`w-4 h-4 bg-no-repeat`} style={{ backgroundImage: `url(${bgURL})` }} />
      </div>
    </div>
  );
}
