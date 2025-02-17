import React from 'react';
import { ListProps, NewJobList } from '@/types/job';
import InfoBox from '@/components/job/InfoBox';
import Location from '@/components/job/Location';
import Deadline from '@/components/job/Deadline';

/**
 * Job list component
 * @param dataList - UI component that implements a job list
 * @constructor
 */
export default function List({ dataList }: ListProps): React.JSX.Element {
  return (
    <ul className="grid grid-cols-2 gap-[5px] px-4 pt-1">
      {dataList.map(
        (data: NewJobList): React.JSX.Element => (
          <li key={data.id} className="relative w-full select-none cursor-pointer">
            <div>
              <div className="relative flex flex-col w-full gap-[10px]">
                <div
                  className="flex p-4 relative rounded-[20px] bg-primary-bg"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 3px 0px' }}
                >
                  <div className="flex flex-col gap-1 flex-1">
                    <InfoBox className={data.classNames.companyName} label={data.companyName} />
                    <InfoBox className={data.classNames.description} label={data.description} />
                    <InfoBox className={data.classNames.workWeekDay} label={data.workWeekDay} />
                    <InfoBox className={data.classNames.payAmount} label={data.payAmount} />
                    <InfoBox className={data.classNames.status} label={data.status} />
                  </div>
                  {data.isClosed && <Deadline />}
                </div>
                <Location />
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
