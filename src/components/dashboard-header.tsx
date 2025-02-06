"use client";

import { UserButton } from "@clerk/nextjs";
import { DotIcon } from "lucide-react";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";

export function DashboardHeader() {
  const breadcrumbs = useBreadcrumbs();
  if (breadcrumbs.length === 0)
    return null;

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <Fragment key={item.title}>
                {index !== breadcrumbs.length - 1 && (
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
                  </BreadcrumbItem>
                )}
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="hidden md:block">
                    <DotIcon aria-hidden />
                  </BreadcrumbSeparator>
                )}
                {index === breadcrumbs.length - 1 && (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                )}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2 px-4">
        <UserButton />
      </div>
    </header>
  );
}
