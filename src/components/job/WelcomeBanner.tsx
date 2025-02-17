import React from 'react';

/**
 * Welcome banner component
 * @constructor
 */
export default function WelcomeBanner(): React.JSX.Element {
  return (
    <div className="flex flex-row items-center gap-[5px]">
      <div className="ml-4 w-[80px] h-[48px] bg-center bg-no-repeat bg-contain bg-[url('/images/foreeder-desk.blue.svg')]"></div>
      <p className="text-primary-color text-base font-semibold select-none">환영해요!</p>
    </div>
  );
}
