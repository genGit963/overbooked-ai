import { FileDownIcon, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Create Interests",
    url: "/create-interests",
    icon: Plus,
  },
  {
    title: "Get Interests",
    url: "/get-interests",
    icon: FileDownIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-center">OB Technical Test</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem
              className="border border-gray-300 m-3 rounded-md bg-white"
              key={item.title}
            >
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
