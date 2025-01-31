export interface NavItem {
  title: string;
  href: string;
  subItems: SubNavItem[];
}

export interface SubNavItem {
  title: string;
  description: string;
  href: string;
  disabled?: boolean;
}
