import {Menu} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Navbar from "./navbar"


export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu/>
            </SheetTrigger>
            <SheetContent className="p-0 bg-white">
                <Navbar/>
            </SheetContent>
        </Sheet>
    )
}