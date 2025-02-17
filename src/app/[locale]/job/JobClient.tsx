'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { RouteParams, UseState } from '@/types/common';
import TopSearch from '@/components/job/TopSearch';
import Banner from '@/components/job/Banner';
import FilterActionBar from '@/components/job/FilterActionBar';
import HiringInfo from '@/components/job/HiringInfo';
import List from '@/components/job/List';
import jobSampleData from '@/data/job.sample.json';
import { BgColors, JobItem, NewJobList } from '@/types/job';
import { formatWeekDays, getBgColors } from '@/app/[locale]/job/utils';
import EndOfList from '@/components/job/EndOfList';

/**
 * Home tab client component
 * @constructor
 */
export default function JobClient(): React.JSX.Element {
  const params: RouteParams = useParams<RouteParams>();
  const locale: string = params.locale;
  const [isDropdownOpen, setIsDropdownOpen]: UseState<boolean> = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen]: UseState<boolean> = useState<boolean>(false);
  const [isHiring, setIsHiring]: UseState<boolean> = useState<boolean>(false);
  console.log('job', locale);

  const jobListData: NewJobList[] = jobSampleData.map((data: JobItem): NewJobList => {
    const bgColors: BgColors = getBgColors(data.isClosed);
    const formattedWorkWeekDay: string = formatWeekDays(data.workWeekDays);
    return {
      id: data.id,
      companyName: data.business.name,
      description: '글로벌 마케터 업무',
      workWeekDay: `${formattedWorkWeekDay} \n${data.startTime} ~ ${data.endTime}`,
      payAmount: `시급 ${data.payAmount.toLocaleString()}원`,
      status: '채용시 마감',
      isClosed: data.isClosed,
      classNames: {
        companyName: `${bgColors.companyName} text-white`,
        description: `${bgColors.description} text-primary-color`,
        workWeekDay: `${bgColors.workWeekDay} text-primary-color`,
        payAmount: `${bgColors.payAmount} text-primary-color ring-[0.5px] ring-inset ring-[#7b7b7b]`,
        status: `${bgColors.status} text-white`
      }
    };
  });

  return (
    <>
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
            <List dataList={jobListData} />
            <EndOfList />
          </div>
        </div>
      </div>
    </>
  );
}
