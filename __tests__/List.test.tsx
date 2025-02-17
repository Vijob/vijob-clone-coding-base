import { render, screen } from '@testing-library/react';
import List from '@/components/job/List';
import { mockJobDataList } from '../__mocks__/jobData';
import { NewJobList } from '@/types/job';

describe('List 컴포넌트 렌더링', (): void => {
  it('렌더링 정상동작 체크', (): void => {
    render(<List dataList={mockJobDataList} />);

    mockJobDataList.forEach((job: NewJobList): void => {
      expect(screen.getByText(job.companyName)).toBeInTheDocument();
    });
  });
});
