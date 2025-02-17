export interface FooterMenu {
  path: string;
  imgURL: string;
  activeImgURL: string;
  tabName: string;
}

export interface FooterProps {
  footerMenuList: FooterMenu[];
}
