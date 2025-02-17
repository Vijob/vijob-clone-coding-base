import React from 'react';

/**
 * Banner Component
 * @constructor
 */
export default function Banner(): React.JSX.Element {
  return (
    <div className="relative w-full h-[100px] px-4 py-[10px]">
      <div className="relative w-full h-full rounded-[10px] overflow-hidden">
        <div className="relative flex flex-col justify-between items-center w-full h-full p-[20px] bg-gray-500 cursor-pointer">
          <div className="flex justify-between items-center gap-[15px] self-stretch h-full">
            <div className="w-[70px] h-[20px] bg-contain bg-right bg-no-repeat bg-[url('/banners/banner_gs25.png')]"></div>
            <span className="text-white font-[600] text-[14px] select-none">
              전국 GS25 편의점 아르바이트 및 직원채용
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
