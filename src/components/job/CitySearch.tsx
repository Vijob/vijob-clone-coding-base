import React from 'react';
import { Button } from '@/components/ui/button';
import { CitySearchProps } from '@/types/job';

/**
 * City search component included in TopSearch component
 * @param isDropdownOpen - City button activation flag
 * @param setIsDropdownOpen - SetState to change search button City value
 * @constructor
 */
export default function CitySearch({ isDropdownOpen, setIsDropdownOpen }: CitySearchProps): React.JSX.Element {
  return (
    <Button className="w-full justify-start" onClick={(): void => setIsDropdownOpen(!isDropdownOpen)}>
      <div className="flex items-center space-x-2">
        <div className="text-lg select-none">전국</div>
        <div className="flex items-center bg-primary-bg text-primary-color rounded-full px-3 py-1">
          <img
            src="/icons/chevron-down.black.svg"
            alt="Chevron-down"
            className={`w-4 h-4 select-none transition-transform ${isDropdownOpen ? '-rotate-180' : 'rotate-0'}`}
          />
        </div>
      </div>
    </Button>
  );
}
