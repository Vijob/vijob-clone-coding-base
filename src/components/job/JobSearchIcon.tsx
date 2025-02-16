import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@/components/ui/button';
import { JobSearchIconProps } from '@/types/job';

/**
 * Job search button icon component
 * @param onClick
 * @param buttonClassName
 * @param iconClassName
 * @constructor
 */
export default function JobSearchIcon({
  onClick,
  buttonClassName,
  iconClassName
}: JobSearchIconProps): React.JSX.Element {
  return (
    <Button onClick={onClick} className={buttonClassName}>
      <SearchIcon style={{ width: '1.5rem', height: '1.5rem' }} className={iconClassName} />
    </Button>
  );
}
