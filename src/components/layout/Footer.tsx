import React from 'react';
import { Button } from '@/components/ui/button';
import { FooterMenu } from '@/types/layout';
import { footerMenuArray } from '@/data/footerMenu';

export default function Footer(): React.JSX.Element {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-t-[#EAEAEA] text-white py-4 px-6 md:px-12 flex justify-between items-center">
      {footerMenuArray.map(
        (footerMenu: FooterMenu): React.JSX.Element => (
          <div key={footerMenu.tabName} className="flex flex-col items-center space-y-1">
            <Button variant="link" className="flex flex-col items-center space-y-1 hover:no-underline">
              <img src={footerMenu.imgURL} alt="chat" className="h-8 w-8" />
              <span className="text-xs md:text-sm">{footerMenu.tabName}</span>
            </Button>
          </div>
        )
      )}
    </div>
  );
}
