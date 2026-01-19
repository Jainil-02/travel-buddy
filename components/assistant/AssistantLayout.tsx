"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";
import ItineraryPanel from "./ItineraryPanel";
import MobileDrawer from "./MobileDrawer";
import BottomSheet from "./BottomSheet";

import { ChatMessage } from "@/types/chat";

export default function AssistantLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [itineraryOpen, setItineraryOpen] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);

  return (
    <div className="relative flex h-[calc(100vh-64px)] bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-20 lg:w-64 border-r border-border bg-card">
        <Sidebar />
      </aside>

      {/* Chat Section */}
      <main className="flex flex-1 flex-col min-w-0">
        <div className="xl:hidden">
          <ChatHeader
            onOpenSidebar={() => setSidebarOpen(true)}
            onOpenItinerary={() => setItineraryOpen(true)}
          />
        </div>
        <ChatArea
          messages={messages}
          isThinking={isThinking}
          onSuggestionClick={handleSend}
        />
        <ChatInput onSend={handleSend} />
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
  );

  async function handleSend(text: string) {
  if (!text.trim()) return

  const userMessage = {
    id: crypto.randomUUID(),
    role: "user",
    createdAt: Date.now(),
    blocks: [{ type: "text", content: text }],
  }

  // ✅ Build nextMessages explicitly
  const nextMessages = [...messages, userMessage]

  // 1️⃣ Update UI immediately
  setMessages(nextMessages)
  setIsThinking(true)

  // 2️⃣ Send the SAME messages to backend
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: nextMessages,
    }),
  })

  const data = await res.json()

  // 3️⃣ Append AI response
  const aiMessage = {
    id: crypto.randomUUID(),
    role: "ai",
    createdAt: Date.now(),
    blocks: data.blocks,
  }

  setMessages(prev => [...prev, aiMessage])
  setIsThinking(false)
}

}
