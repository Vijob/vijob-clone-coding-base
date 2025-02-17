import { DAY_MAP } from '@/configs/constants';
import { BgColors } from '@/types/job';

export const formatWeekDays = (weekDays: string[]): string => {
  return weekDays.map((day: string): string => DAY_MAP[day] ?? day).join('/');
};

export const getBgColors = (isClosed: boolean): BgColors => {
  return {
    companyName: isClosed ? 'bg-neutral-400' : 'bg-[#1e7ef6]',
    description: isClosed ? 'bg-neutral-400' : 'bg-[#f06125]',
    workWeekDay: isClosed ? 'bg-neutral-400' : 'bg-[#3da758]',
    payAmount: isClosed ? 'bg-neutral-400' : 'bg-primary-bg',
    status: isClosed ? 'bg-neutral-400' : 'bg-black'
  };
};
