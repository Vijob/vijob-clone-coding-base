import { Meta, type StoryObj } from '@storybook/react';
import Footer from '@/components/layout/Footer';
import { footerMenuList } from '@/data/footerMenu';

const meta: Meta<typeof Footer> = {
  title: 'Components/Layout/Footer',
  component: Footer,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/ko/job',
        segments: [['locale', 'ko']]
      }
    }
  },
  argTypes: {
    footerMenuList: {
      control: {
        type: 'object',
        options: footerMenuList
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const component: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/ko/job',
        segments: [['locale', 'ko']]
      }
    }
  },
  args: {
    footerMenuList: footerMenuList
  }
};
