import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "./ui/button";
import NavbarActions from "./navbar-actions";

export const MobileToggle = ({
  serverId
}: {
  serverId: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex gap-0">
        <div className="w-[72px]">
          <NavbarActions />
        </div>
        <NavbarActions />
      </SheetContent>
    </Sheet>
  )
}