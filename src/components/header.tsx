"use client";

import { MenuIcon, StoreIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const segment = useSelectedLayoutSegment();

  return (
    <header className="sticky left-0 top-0 z-40 w-full border-b bg-background px-4 sm:px-0">
      <div className="container relative mx-auto flex min-h-20 flex-row items-center gap-4 lg:grid lg:grid-cols-3">
        <div className="hidden flex-row items-center justify-start gap-4 lg:flex">
          <NavigationMenu className="flex items-start justify-start">
            <NavigationMenuList className="flex flex-row justify-start gap-4">
              {NAV_ITEMS.map(navItem => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuTrigger>
                    {navItem.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {navItem.subItems.map(subItem => (
                        <MainNavItem
                          key={subItem.title}
                          title={subItem.title}
                          href={subItem.href}
                        >
                          {subItem.description}
                        </MainNavItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <Link href="/">
            <p className="font-extrabold">MultiComm</p>
          </Link>
        </div>
        <div className="flex w-full justify-end gap-4">
          <Button variant="ghost" className="hidden md:inline">
            Track Order
          </Button>
          <div className="hidden border-r md:inline" />
          <Button variant="outline">Sign in</Button>
          <Button>
            <StoreIcon aria-hidden />
            Sell
          </Button>
        </div>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTitle className="hidden" />
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
              >
                <MenuIcon aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pl-1 pr-0 pt-9">
              <div className="w-full px-7">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-bold">MultiComm</span>
                </Link>
              </div>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="pl-1 pr-7">
                  <Accordion type="multiple" className="w-full">
                    {NAV_ITEMS.map(navItem => (
                      <AccordionItem value={navItem.title} key={navItem.title}>
                        <AccordionTrigger className="text-sm">
                          {navItem.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {navItem.subItems.map(subItem => (
                              <MobileNavItem
                                key={subItem.title}
                                href={String(subItem.href)}
                                segment={String(segment)}
                                setOpen={setIsOpen}
                                disabled={subItem.disabled}
                                className="m-1"
                              >
                                {subItem.title}
                              </MobileNavItem>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MainNavItem({ ref, className, title, children, href, ...props }: React.ComponentPropsWithoutRef<"a"> & { ref?: React.RefObject<React.ElementRef<"a"> | null> }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

interface MobileLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  disabled?: boolean;
  segment: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNavItem({
  children,
  href,
  disabled,
  segment,
  setOpen,
  className,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60",
        className,
      )}
      onClick={() => setOpen(false)}
      {...props}
    >
      {children}
    </Link>
  );
}
