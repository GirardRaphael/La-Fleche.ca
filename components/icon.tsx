import {
  Bot,
  Workflow,
  BarChart3,
  Code2,
  AlertTriangle,
  Mail,
  PackageOpen,
  Truck,
  PhoneCall,
  LayoutDashboard,
  Navigation,
  ShoppingBag,
  Warehouse,
  Store,
  Factory,
  Headphones,
  FileStack,
  Search,
  Rocket,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Bot,
  Workflow,
  BarChart3,
  Code2,
  AlertTriangle,
  Mail,
  PackageOpen,
  Truck,
  PhoneCall,
  LayoutDashboard,
  Navigation,
  ShoppingBag,
  Warehouse,
  Store,
  Factory,
  Headphones,
  FileStack,
  Search,
  Rocket,
  Wrench,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = icons[name] ?? Bot;
  return <Cmp className={className} />;
}
