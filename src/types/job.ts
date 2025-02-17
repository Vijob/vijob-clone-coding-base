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

export interface NewJobList extends Omit<NewJobInfo, 'workTime'> {
  id: number;
  status: string;
  classNames: BgColors;
}

export interface ListProps {
  dataList: NewJobList[];
}

export interface JobItem {
  id: number;
  payAmount: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  categoryId: number;
  workWeekDays: string[];
  isClosed: boolean;
  business: {
    id: number;
    name: string;
    ownerName: string;
    employeesCount: number;
    location: {
      latitude: number;
      longitude: number;
    };
    email: string;
    establishedDate: string;
    websiteUrl: string;
    address: {
      zipCode: string | null;
      provinceCode: string;
      cityCode: string;
      location: {
        latitude: number;
        longitude: number;
      };
      roadAddress: string;
      jibunAddress: string;
      addressDetail: string;
    };
  };
  i18nDescription: {
    EN_US: string;
    KO_KR: string;
  };
  i18nTitle: {
    EN_US: string;
    KO_KR: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  address: {
    zipCode: string;
    provinceCode: string;
    cityCode: string;
    location: {
      latitude: number;
      longitude: number;
    };
    roadAddress: string;
    jibunAddress: string;
    addressDetail: string;
  };
}
