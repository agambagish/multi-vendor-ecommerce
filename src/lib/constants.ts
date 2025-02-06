import {
  LayoutDashboardIcon,
  PackageIcon,
  UserSquare2Icon,
} from "lucide-react";

import type { CarouselItem, DashboardSidebarItem, NavItem } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Products",
    href: "/products",
    subItems: [
      {
        title: "Product Category 1",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
      {
        title: "Product Category 2",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
      {
        title: "Product Category 3",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
    ],
  },
  {
    title: "Stores",
    href: "/stores",
    subItems: [
      {
        title: "Evanto Market",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
      {
        title: "Acme Corp",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
      {
        title: "One Inc",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
      {
        title: "TWBlocks",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
    ],
  },
  {
    title: "Sell",
    href: "#",
    responsiveClassName: "flex lg:hidden",
    subItems: [
      {
        title: "Onboard as seller",
        description: "Lorem ipsum dolor sit amet consectetur.",
        href: "#",
      },
    ],
  },
];

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    label: "Summer Sale",
    title: "Save up to 50%",
    description: "Over 100 products discounted",
    buttonText: "Shop Now",
    buttonLink: "#",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    credit: "Claudio Schwarz on Unsplash",
  },
  {
    label: "New Arrivals",
    title: "Discover our latest collection",
    description: "Fresh styles just landed",
    buttonText: "Explore Now",
    buttonLink: "#",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    credit: "Adrian Sulyok on Unsplash",
  },
  {
    label: "Special Offer",
    title: "Buy one get one free",
    description: "Limited time offer",
    buttonText: "Learn More",
    buttonLink: "#",
    image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    credit: "Square on Unsplash",
  },
];

export function getDashboardSidebarItems(
  userId: string | undefined,
): DashboardSidebarItem[] {
  return [
    {
      title: "Dashboard",
      href: `/dashboard/${userId}`,
      icon: LayoutDashboardIcon,
    },
    {
      title: "Products",
      href: `/dashboard/${userId}/products`,
      icon: PackageIcon,
    },
    {
      title: "Customers",
      href: "#",
      icon: UserSquare2Icon,
    },
  ];
}
