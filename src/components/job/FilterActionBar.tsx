import React from 'react';
import ActionButton from '@/components/job/ActionButton';

/**
 * Component containing filtering and reset buttons
 * @constructor
 */
export default function FilterActionBar(): React.JSX.Element {
  return (
    <div className="h-[60px] bg-transparent">
      <div className="w-full flex flex-col pt-2 pb-4 gap-2">
        <ul className="w-full flex flex-row overflow-x-auto px-4 gap-[6px]">
          <li>
            <ActionButton bgColor="bg-primary-bg" label="초기화" bgURL="/icons/refresh.svg" />
          </li>
          <li>
            <ActionButton bgColor="bg-primary-bg" label="직종" bgURL="/icons/chevron-down.black.svg" />
          </li>
        </ul>
      </div>
    </div>
  );
}
