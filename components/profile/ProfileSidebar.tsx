import Image from "next/image"
import {
  User,
  Map,
  CreditCard,
  Settings,
  Pencil,
  BadgeCheck,
} from "lucide-react"

export default function ProfileSidebar() {
  return (
    <div className="flex flex-col p-6 gap-6 w-full">
      {/* Profile */}
      <div className="flex flex-col items-center gap-4 pb-6 border-b border-border">
        <div className="relative">
          <Image
            src="/images/profile-avatar.jpg"
            alt="User profile"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-background border border-border text-primary hover:bg-primary hover:text-white">
            <Pencil size={14} />
          </button>
        </div>

        <div className="text-center">
          <h2 className="font-bold">Alex Johnson</h2>
          <div className="flex items-center gap-1 text-sm text-muted-foreground justify-center">
            <BadgeCheck size={14} className="text-yellow-500" />
            Travel Buddy Premium
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        <SidebarItem icon={User} label="Personal Info" />
        <SidebarItem icon={Map} label="Saved Trips" active />
        <SidebarItem icon={CreditCard} label="Payment Methods" />
        <SidebarItem icon={Settings} label="Settings" />
      </nav>

      {/* Subscription */}
      <div className="mt-auto rounded-xl bg-primary text-white p-4">
        <p className="text-xs opacity-80">Current Plan</p>
        <p className="font-bold mb-3">Premium Yearly</p>
        <button className="w-full bg-white/20 hover:bg-white/30 text-xs font-bold py-2 rounded-lg">
          Manage Subscription
        </button>
      </div>
    </div>
  )
}

function SidebarItem({
  icon: Icon,
  label,
  active,
}: {
  icon: any
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors
        ${
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
    >
      <Icon size={18} />
      {label}
    </button>
  )
}
