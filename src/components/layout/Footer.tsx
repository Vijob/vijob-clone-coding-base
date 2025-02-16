'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { RouteParams } from '@/types/common';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Button } from '@/components/ui/button';
import { FooterMenu } from '@/types/layout';
import { footerMenuArray } from '@/data/footerMenu';

export default function Footer(): React.JSX.Element {
  const router: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const params: RouteParams = useParams<RouteParams>();
  const locale: string = params.locale;

  return (
    <div className="relative bottom-0 left-0 w-full bg-primary-bg border-t border-t-[#C9C8C8] text-white py-4 px-6 flex justify-around items-center z-[1]">
      {footerMenuArray.map((footerMenu: FooterMenu): React.JSX.Element => {
        const currentClickTabPath: string = `/${locale}/${footerMenu.path}`;
        const isActive: boolean = pathname === currentClickTabPath;

        return (
          <div key={footerMenu.tabName} className="relative flex flex-col items-center gap-1">
            <Button
              variant="link"
              className="flex flex-col items-center gap-1 hover:no-underline"
              onClick={(): void => {
                router.push(currentClickTabPath);
              }}
            >
              <img src={isActive ? footerMenu.activeImgURL : footerMenu.imgURL} alt="chat" className="h-8 w-8" />
              <span className="text-xs md:text-sm">{footerMenu.tabName}</span>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
