import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';
import { footerMenuList } from '@/data/footerMenu';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { FooterMenu } from '@/types/layout';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useParams: jest.fn()
}));

describe('Footer 컴포넌트 렌더링 및 상호작용', (): void => {
  const mockPush = jest.fn();
  const mockLocale = 'ko';

  beforeEach((): void => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      prefetch: jest.fn(),
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/'
    });

    (usePathname as jest.Mock).mockReturnValue(`${mockLocale}/job`);
    (useParams as jest.Mock).mockReturnValue({ locale: mockLocale });
  });

  afterEach((): void => {
    jest.clearAllMocks();
  });

  it('footerMenuList의 항목들이 화면에 잘 렌더링되는지', (): void => {
    render(<Footer footerMenuList={footerMenuList} />);

    // 각 메뉴 항목이 화면에 있는지 확인
    footerMenuList.forEach((menuItem: FooterMenu) => {
      expect(screen.getByText(menuItem.tabName)).toBeInTheDocument();
    });
  });

  it('버튼 클릭 시 router.push가 호출되는지', (): void => {
    render(<Footer footerMenuList={footerMenuList} />);

    const firstMenuItem: HTMLElement = screen.getByText(footerMenuList[0].tabName);
    fireEvent.click(firstMenuItem);

    expect(mockPush).toHaveBeenCalledWith(`/${mockLocale}/${footerMenuList[0].path}`);
  });
});
