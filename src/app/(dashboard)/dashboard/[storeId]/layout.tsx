import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { db } from "@/db";
import { stores } from "@/db/schema";

interface Props extends React.PropsWithChildren {
  params: {
    storeId: string;
  };
}

export default async function Layout({ children, params }: Props) {
  const { storeId } = await params;
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  const [store] = await db
    .select({
      id: stores.id,
      name: stores.name,
    })
    .from(stores)
    .where(eq(stores.id, storeId));

  if (!store) {
    notFound();
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DashboardSidebar
        storeName={store.name}
        storeId={store.id}
      />
      <SidebarInset>
        <DashboardHeader />
        <ScrollArea className="h-[calc(100dvh-52px)]">
          <div className="flex flex-1 p-4 md:px-6">
            {children}
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
