import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import ProfileSidebar from "./ProfileSidebar"

export default function ProfileSidebarSheet() {
  return (
    <SheetContent side="bottom" className="h-[85vh] p-0 rounded-t-2xl">
      <SheetHeader className="p-4 border-b border-border">
        <SheetTitle>Profile</SheetTitle>
      </SheetHeader>

      <div className="h-full overflow-y-auto">
        <ProfileSidebar />
      </div>
    </SheetContent>
  )
}
