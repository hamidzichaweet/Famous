import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Scale, 
  Users, 
  FileText, 
  DollarSign, 
  Calendar, 
  CheckSquare,
  Home,
  Settings
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'الرئيسية', icon: Home },
  { id: 'cases', label: 'إدارة القضايا', icon: Scale },
  { id: 'clients', label: 'إدارة العملاء', icon: Users },
  { id: 'documents', label: 'إدارة الوكالات', icon: FileText },
  { id: 'finance', label: 'الإدارة المالية', icon: DollarSign },
  { id: 'sessions', label: 'الجلسات', icon: Calendar },
  { id: 'tasks', label: 'المهام', icon: CheckSquare },
  { id: 'settings', label: 'الإعدادات', icon: Settings },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-900 to-purple-900 text-white h-screen fixed right-0 top-0 z-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-8 text-white">
          منصة حويط
        </h1>
      </div>
      
      <ScrollArea className="h-[calc(100vh-120px)] px-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-right h-12 text-base",
                  activeSection === item.id 
                    ? "bg-white/20 text-white hover:bg-white/30" 
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
                onClick={() => onSectionChange(item.id)}
              >
                <Icon className="ml-3 h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}