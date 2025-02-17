import React from 'react';

/**
 * Job posting closing component
 * @constructor
 */
export default function Deadline(): React.JSX.Element {
  return (
    <div className="absolute top-0 right-0">
      <div
        className="absolute right-[6px] top-[5px] size-[60px] bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/images/stamp-closed.deep-gray.png)' }}
      />
    </div>
  );
}
