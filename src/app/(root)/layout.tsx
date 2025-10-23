import { AppSidebar } from "@/components/layouts/sidebar/app-sidebar";
import SidebarBreadcrumbs from "@/components/layouts/sidebar/breadcrumbs";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
type NotionAppLayoutProps = PropsWithChildren;
const NotionAppLayout = ({ children }: NotionAppLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <SidebarBreadcrumbs />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default NotionAppLayout;
