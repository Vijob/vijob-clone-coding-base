import { FooterMenu } from '@/types/layout';

export const footerMenuList: FooterMenu[] = [
  {
    path: 'job',
    imgURL: '/icons/nav-job.48x48.png',
    activeImgURL: '/icons/nav-job-active.48x48.png',
    tabName: '홈'
  },
  {
    path: 'community',
    imgURL: '/icons/nav-life.48x48.png',
    activeImgURL: '/icons/nav-life-active.48x48.png',
    tabName: '커뮤니티'
  },
  {
    path: 'content',
    imgURL: '/icons/resume.48x48.png',
    activeImgURL: '/icons/resume.48x48.png',
    tabName: '콘텐츠'
  },
  {
    path: 'chat',
    imgURL: '/icons/nav-chat.48x48.png',
    activeImgURL: '/icons/nav-chat-active.48x48.png',
    tabName: '채팅'
  },
  {
    path: 'setting',
    imgURL: '/icons/nav-setting.48x48.png',
    activeImgURL: '/icons/nav-setting-active.48x48.png',
    tabName: '내정보'
  }
];
