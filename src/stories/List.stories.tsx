import List from '@/components/job/List';
import { Meta, type StoryObj } from '@storybook/react';
import { mockJobDataList } from '../../__mocks__/jobData';

const meta: Meta<typeof List> = {
  title: 'Components/Job/List',
  component: List,
  argTypes: {
    dataList: {
      control: {
        type: 'object',
        options: mockJobDataList
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const testData: Story = {
  args: {
    dataList: mockJobDataList
  }
};
