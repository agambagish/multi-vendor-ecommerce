import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  subItems: SubNavItem[];
  responsiveClassName?: string;
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

export interface DashboardSidebarItem {
  title: string;
  href: string;
  icon: LucideIcon;
  defaultOpen?: boolean;
  subItems?: DashboardSidebarItem[];
}
