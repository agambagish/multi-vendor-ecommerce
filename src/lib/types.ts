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

export interface CarouselItem {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  credit: string;
}
