import { NewJobList } from '@/types/job';

export const mockJobDataList: NewJobList[] = [
  {
    id: 100,
    companyName: '회사1',
    description: '글로벌 마케터',
    workWeekDay: '월/화/수/목/금 \n09:00 ~ 18:00',
    payAmount: '시급 10,000원',
    status: '채용시 마감',
    isClosed: false,
    classNames: {
      companyName: 'bg-[#1e7ef6] text-white',
      description: 'bg-[#f06125] text-primary-color',
      workWeekDay: 'bg-[#3da758] text-primary-color',
      payAmount: 'bg-primary-bg text-primary-color ring-[0.5px] ring-inset ring-[#7b7b7b]',
      status: 'bg-black text-white'
    }
  },
  {
    id: 200,
    companyName: '회사2',
    description: '서빙',
    workWeekDay: '월/금 \n11:00 ~ 20:00',
    payAmount: '시급 15,000원',
    status: '수시 채용',
    isClosed: true,
    classNames: {
      companyName: 'bg-neutral-400 text-white',
      description: 'bg-neutral-400 text-white',
      workWeekDay: 'bg-neutral-400 text-white',
      payAmount: 'bg-neutral-400 text-white',
      status: 'bg-neutral-400 text-white'
    }
  }
];
