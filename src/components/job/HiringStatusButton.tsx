import React from 'react';
import { HiringStatusButtonProps } from '@/types/job';

/**
 * Button component to change hiring status
 * @param isHiring
 * @param setIsHiring
 * @constructor
 */
export default function HiringStatusButton({ isHiring, setIsHiring }: HiringStatusButtonProps): React.JSX.Element {
  return (
    <button
      className="relative flex justify-start items-center gap-1 px-4 py-2"
      onClick={(): void => setIsHiring(!isHiring)}
    >
      <p className="text-sm select-none">채용 중</p>
      <div
        className="w-4 h-4 bg-contain bg-no-repeat"
        style={{
          backgroundImage: isHiring ? 'url(/icons/checked-small.blue.svg)' : 'url(/icons/checkable-small.gray.svg)'
        }}
      />
    </button>
  );
}
