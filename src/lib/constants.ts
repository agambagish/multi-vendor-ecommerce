import type { NavItem } from "@/lib/types";

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
];
