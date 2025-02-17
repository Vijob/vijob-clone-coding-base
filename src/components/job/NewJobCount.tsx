import React from 'react';

/**
 * Number of new jobs today
 * @constructor
 */
export default function NewJobCount(): React.JSX.Element {
  return (
    <div className="w-full px-4 pt-4">
      <div className="w-full px-4 py-1.5 rounded-lg bg-primary-bg">
        <div className="relative max-w-full">
          <div className="relative overflow-hidden flex w-full items-center">
            <div className="relative left-0 whitespace-nowrap pr-4">
              <p className="text-sm select-none">
                오늘 새로 등록된 일자리 전국 <span className="text-blue-500 font-semibold">22</span> 건
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
