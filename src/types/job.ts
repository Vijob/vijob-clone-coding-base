import { SetState } from '@/types/common';

export interface TopSearchProps {
  isSearchOpen: boolean;
  setIsSearchOpen: SetState<boolean>;
  isDropdownOpen: boolean;
  setIsDropdownOpen: SetState<boolean>;
}

export interface CitySearchProps extends Pick<TopSearchProps, 'isDropdownOpen' | 'setIsDropdownOpen'> {}

export interface JobSearchProps extends Pick<TopSearchProps, 'setIsSearchOpen'> {}

export interface JobSearchIconProps {
  onClick: () => void;
  buttonClassName?: string;
  iconClassName?: string;
}

export interface ActionButtonProps {
  bgColor: string;
  textColor?: string;
  label: string;
  bgURL: string;
}

export interface HiringInfoProps {
  isHiring: boolean;
  setIsHiring: SetState<boolean>;
}

export interface HiringStatusButtonProps extends HiringInfoProps {}

export interface NewJobInfo {
  companyName: string;
  description: string;
  workWeekDay: string;
  workTime: string;
  payAmount: string;
  isClosed: boolean;
}

export interface BgColors extends Omit<NewJobInfo, 'workTime' | 'isClosed'> {
  status: string;
}

export interface InfoBoxProps {
  className: string;
  label: string;
}
