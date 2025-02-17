import React from 'react';
import { Button } from '@/components/ui/button';
import { JobSearchProps } from '@/types/job';
import JobSearchIcon from '@/components/job/JobSearchIcon';
import { Input } from '@/components/ui/input';

/**
 * Job search component included in TopSearch component
 * @param setIsSearchOpen - SetState to change search button activation value
 * @constructor
 */
export default function JobSearch({ setIsSearchOpen }: JobSearchProps): React.JSX.Element {
  return (
    <div className="flex w-full h-full items-center space-x-2">
      <div className="relative pl-4 py-2 flex-grow">
        <Input
          type="text"
          placeholder="일자리를 검색해보세요"
          className="w-full h-full bg-gray-100 outline-none flex-grow text-lg px-3 py-1 rounded-full placeholder:text-gray-400 focus:ring-blue-500 ring-1 ring-gray-300"
        />
      </div>
      <div className="flex flex-row gap-[1px] ">
        <Button onClick={(): void => setIsSearchOpen(false)} className="w-6 h-6 p-0">
          <img src="/icons/close.48x48.png" alt="Close" className="w-6 h-6" />
        </Button>

        <JobSearchIcon
          onClick={(): void => console.log('검색')}
          buttonClassName="w-6 h-6"
          iconClassName="text-gray-600 cursor-pointer w-6 h-6 p-0"
        />
      </div>
    </div>
  );
}
