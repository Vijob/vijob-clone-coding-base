import React from 'react';

/**
 * Job list location display component
 * @constructor
 */
export default function Location(): React.JSX.Element {
  return (
    <div className="w-full flex flex-row items-center gap-[7px] relative overflow-hidden">
      <div className="relative w-9 h-9 rounded-[200px] border-[0.5px] border-[#d9d9d9]" />
      <div className="flex flex-col items-start gap-[5px] relative">
        <div className="flex items-center gap-[3px] relative">
          <div className="relative w-full text-sm">판교동</div>
        </div>
      </div>
    </div>
  );
}
