import React from 'react';
import { HiringInfoProps } from '@/types/job';
import WelcomeBanner from '@/components/job/WelcomeBanner';
import HiringStatusButton from '@/components/job/HiringStatusButton';
import NewJobCount from '@/components/job/NewJobCount';

/**
 * UI components that include a banner, a button displaying hiring status, and the number of new hires.
 * @param isHiring
 * @param setIsHiring
 * @constructor
 */
export default function HiringInfo({ isHiring, setIsHiring }: HiringInfoProps): React.JSX.Element {
  return (
    <div className="w-full flex flex-col justify-between items-start mt-[8px] mb-[20px]">
      <div className="w-full flex justify-between items-center">
        <WelcomeBanner />
        <HiringStatusButton isHiring={isHiring} setIsHiring={setIsHiring} />
      </div>
      <NewJobCount />
    </div>
  );
}
