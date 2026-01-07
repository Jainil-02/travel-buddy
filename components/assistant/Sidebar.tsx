import {
  PlaneTakeoff,
  PlusCircle,
  History,
  Heart,
  Compass,
  Settings,
} from "lucide-react"

export default function Sidebar() {
  return (
    <div className="p-4 flex flex-col gap-6 h-full w-full">

      {/* Actions */}
      <button className="flex items-center gap-3 px-3 py-3 rounded-3xl bg-primary/10 text-primary font-semibold">
        <PlusCircle size={18} />
        <span className="block md:hidden lg:block">New Trip</span>
      </button>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        <NavItem icon={<History size={18} />} label="Recent Trips" />
        <NavItem icon={<Heart size={18} />} label="Saved Places" />
        <NavItem icon={<Compass size={18} />} label="Explore" />
      </nav>

      {/* User */}
      <div className="mt-auto flex items-center gap-3 p-3 rounded-xl hover:bg-muted">
        <div className="w-10 h-10 rounded-full bg-muted" />
        <div className="block md:hidden lg:block flex-1">
          <p className="text-foreground text-sm font-semibold">Alex Johnson</p>
          <p className="text-xs text-muted-foreground">Free Plan</p>
        </div>
        <Settings size={18} className="block md:hidden lg:block text-muted-foreground" />
      </div>

    </div>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-3 px-3 py-3 rounded-3xl text-muted-foreground hover:bg-muted hover:text-foreground">
      {icon}
      <span className="block md:hidden lg:block text-sm">{label}</span>
    </button>
  )
}
