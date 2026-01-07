"use client"

import { useState } from "react"
import Sidebar from "./Sidebar"
import ChatHeader from "./ChatHeader"
import ChatArea from "./ChatArea"
import ChatInput from "./ChatInput"
import ItineraryPanel from "./ItineraryPanel"
import MobileDrawer from "./MobileDrawer"
import BottomSheet from "./BottomSheet"

export default function AssistantLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [itineraryOpen, setItineraryOpen] = useState(false)

  return (
    <div className="relative flex h-[calc(100vh-64px)] bg-background overflow-hidden">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-20 lg:w-64 border-r border-border bg-card">
        <Sidebar />
      </aside>

      {/* Chat Section */}
      <main className="flex flex-1 flex-col min-w-0">
        <ChatHeader
          onOpenSidebar={() => setSidebarOpen(true)}
          onOpenItinerary={() => setItineraryOpen(true)}
        />
        <ChatArea />
        <ChatInput/>
      </main>

      {/* Desktop Itinerary */}
      <aside className="hidden xl:flex w-[19rem] border-l border-border bg-card">
        <ItineraryPanel />
      </aside>

      {/* Mobile Sidebar Drawer */}
      {sidebarOpen && (
        <MobileDrawer onClose={() => setSidebarOpen(false)}>
          <Sidebar />
        </MobileDrawer>
      )}

      {/* Mobile Itinerary Sheet */}
      {itineraryOpen && (
        <BottomSheet onClose={() => setItineraryOpen(false)}>
          <ItineraryPanel />
        </BottomSheet>
      )}
    </div>
  )
}
