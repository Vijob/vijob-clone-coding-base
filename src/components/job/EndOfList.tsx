import React from 'react';

/**
 * End of job list
 * @constructor
 */
export default function EndOfList(): React.JSX.Element {
  return (
    <div className="flex flex-col justify-between items-center p-8 mb-8">
      <p className="text-sm text-gray-400 ">마지막 일자리입니다.</p>
    </div>
  );
}
