'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { RouteParams, UseState } from '@/types/common';
import TopSearch from '@/components/job/TopSearch';
import Banner from '@/components/job/Banner';
import Footer from '@/components/layout/Footer';
import FilterActionBar from '@/components/job/FilterActionBar';
import HiringInfo from '@/components/job/HiringInfo';
import List from '@/components/job/List';

/**
 * Home Tab Component
 * @constructor
 */
export default function Job(): React.JSX.Element {
  const params: RouteParams = useParams<RouteParams>();
  const locale: string = params.locale;
  const [isDropdownOpen, setIsDropdownOpen]: UseState<boolean> = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen]: UseState<boolean> = useState<boolean>(false);
  const [isHiring, setIsHiring]: UseState<boolean> = useState<boolean>(false);
  console.log('job', locale);

  return (
    <div className="flex flex-col relative w-full h-full overflow-y-auto">
      <div className="absolute top-0 left-0 right-0 bg-opacity-80 backdrop-blur-[20px] z-10">
        <TopSearch
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
        <div className="relative">
          <Banner />
          <FilterActionBar />
        </div>
      </div>
      <div className="relative h-full overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute left-0 w-full h-[1px] z-10 top-[216px]"></div>
          <div className="relative w-full h-full overflow-x-hidden overflow-y-auto overscroll-none">
            <div style={{ width: '100%', height: '216px' }}></div>

            <HiringInfo isHiring={isHiring} setIsHiring={setIsHiring} />

            <ul className="grid grid-cols-2 gap-[5px] px-4 pt-1">
              <List />
            </ul>
            <div className="flex flex-col justify-between items-center p-8 mb-8">
              <p className="text-sm text-gray-400 ">마지막 일자리입니다.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
