import React from 'react';
import CitySearch from '@/components/job/CitySearch';
import { TopSearchProps } from '@/types/job';
import JobSearch from '@/components/job/JobSearch';
import JobSearchIcon from '@/components/job/JobSearchIcon';

/**
 * Search component used in the Job tab
 * @param isSearchOpen - Search button activation flag
 * @param setIsSearchOpen - SetState to change search button activation value
 * @param isDropdownOpen - City button activation flag
 * @param setIsDropdownOpen - SetState to change search button City value
 * @constructor
 */
export default function TopSearch({
  isSearchOpen,
  setIsSearchOpen,
  isDropdownOpen,
  setIsDropdownOpen
}: TopSearchProps): React.JSX.Element {
  return (
    <div className="flex flex-row items-center justify-start w-full h-14 p-4 bg-primary-bg">
      {!isSearchOpen ? (
        <CitySearch isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
      ) : (
        <JobSearch setIsSearchOpen={setIsSearchOpen} />
      )}

      {!isSearchOpen && (
        <JobSearchIcon onClick={(): void => setIsSearchOpen(true)} iconClassName="text-gray-600 cursor-pointer" />
      )}
    </div>
  );
}
