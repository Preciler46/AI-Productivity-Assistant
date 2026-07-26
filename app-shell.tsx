import type { ReactNode } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function AppShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex min-w-0 flex-1 flex-col bg-background">
          <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
            <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
              <SidebarTrigger className="shrink-0" />
              <div className="min-w-0">
                <h1 className="truncate text-base font-semibold sm:text-lg">{title}</h1>
                <p className="hidden truncate text-xs text-muted-foreground sm:block">
                  {description}
                </p>
              </div>
              <ThemeToggle />
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto w-full max-w-4xl">{children}</div>
          </main>

          <footer className="border-t border-border bg-surface px-4 py-4 sm:px-6">
            <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-muted-foreground">
              Disclaimer: AI-generated content. Please verify important information before sending or
              making decisions.
            </p>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
