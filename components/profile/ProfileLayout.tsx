"use client";

import ProfileMenuButton from "./ProfileMenuButton";
import ProfileSidebar from "./ProfileSidebar";
import ProfileStats from "./ProfileStats";
import SavedTripsHeader from "./SavedTripsHeader";
import TripsFilterTabs from "./TripsFilterTabs";
import TripsGrid from "./TripsGrid";

export default function ProfileLayout() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-80 border-r border-border bg-card sticky h-auto">
        <ProfileSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-6 flex flex-col gap-8">
          <ProfileMenuButton />

          <ProfileStats />
          <SavedTripsHeader />
          <TripsFilterTabs />
          <TripsGrid />
        </div>
      </main>
    </div>
  );
}
