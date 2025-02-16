import React from 'react';
import jobSampleObject from '@/data/job.sample.json';
import { DAY_MAP } from '@/configs/constants';
import { BgColors, InfoBoxProps, NewJobInfo } from '@/types/job';
import InfoBox from '@/components/job/InfoBox';
import Location from '@/components/job/Location';

/**
 * Job list component
 * @constructor
 */
export default function List(): React.JSX.Element {
  const formatWeekDays = (weekDays: string[]): string => {
    return weekDays.map((day: string): string => DAY_MAP[day] ?? day).join('/');
  };

  const newJobInfo: NewJobInfo = {
    companyName: jobSampleObject.business.name,
    description: '글로벌 마케터 업무',
    workWeekDay: formatWeekDays(jobSampleObject.workWeekDays),
    workTime: `${jobSampleObject.startTime} ~ ${jobSampleObject.endTime}`,
    payAmount: jobSampleObject.payAmount.toLocaleString(),
    isClosed: jobSampleObject.isClosed
  };

  const bgColors: BgColors = {
    companyName: newJobInfo.isClosed ? 'bg-neutral-400' : 'bg-[#1e7ef6]',
    description: newJobInfo.isClosed ? 'bg-neutral-400' : 'bg-[#f06125]',
    workWeekDay: newJobInfo.isClosed ? 'bg-neutral-400' : 'bg-[#3da758]',
    payAmount: newJobInfo.isClosed ? 'bg-neutral-400' : 'bg-primary-bg',
    status: newJobInfo.isClosed ? 'bg-neutral-400' : 'bg-black'
  };

  const infoBoxes: InfoBoxProps[] = [
    { className: `${bgColors.companyName} text-white`, label: newJobInfo.companyName },
    { className: `${bgColors.description} text-primary-color`, label: newJobInfo.description },
    {
      className: `${bgColors.workWeekDay} text-primary-color`,
      label: `${newJobInfo.workWeekDay} \n${newJobInfo.workTime}`
    },
    {
      className: `${bgColors.payAmount} text-primary-color ring-[0.5px] ring-inset ring-[#7b7b7b]`,
      label: `시급 ${newJobInfo.payAmount}`
    },
    { className: `${bgColors.status} text-white`, label: '채용시 마감' }
  ];

  return (
    <li className="relative w-full select-none cursor-pointer">
      <div>
        <div className="relative flex flex-col w-full gap-[10px]">
          <div
            className="flex p-4 relative rounded-[20px] bg-primary-bg"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 3px 0px' }}
          >
            <div className="flex flex-col gap-1 flex-1">
              {infoBoxes.map(
                (infoBox: InfoBoxProps): React.JSX.Element => (
                  <InfoBox key={infoBox.label} className={infoBox.className} label={infoBox.label} />
                )
              )}
            </div>
            {newJobInfo.isClosed && (
              <div className="absolute top-0 right-0">
                <div
                  className="absolute right-[6px] top-[5px] size-[60px] bg-no-repeat bg-contain"
                  style={{ backgroundImage: 'url(/images/stamp-closed.deep-gray.png)' }}
                ></div>
              </div>
            )}
          </div>
          <Location />
        </div>
      </div>
    </li>
  );
}
