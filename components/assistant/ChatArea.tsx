import { useEffect, useRef } from "react";
import ChatWelcome from "./ChatWelcome";
import { ChatMessage, ChatBlock } from "@/types/chat";
import { UserMessage } from "./message/UserMessage";
import { AIMessage } from "./message/AIMessage";
import { PlaceCard } from "./message/PlaceCard";
import ThinkingIndicator from "./ThinkingIndicatior";

export default function ChatArea({
  messages,
  isThinking,
  onSuggestionClick,
}: {
  messages: ChatMessage[];
  isThinking: boolean;
  onSuggestionClick: (text: string) => void;
}) {
 const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!scrollContainerRef.current || !bottomRef.current) return

    scrollContainerRef.current.scrollTo({
      top: bottomRef.current.offsetTop,
      behavior: "smooth",
    })
  }, [messages, isThinking])

  return (
    <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-10 py-6 space-y-10 scrollbar-hide">
      <ChatWelcome username="Alex" />

      {messages.map((message) => (
        <ChatMessageRenderer
          key={message.id}
          message={message}
          onSuggestionClick={onSuggestionClick}
        />
      ))}
      {isThinking && <ThinkingIndicator />}

      {/* 👇 Scroll anchor */}
      <div ref={bottomRef} />
      <div className="h-6" />
    </div>
  );
}
function ChatMessageRenderer({
  message,
  onSuggestionClick,
}: {
  message: ChatMessage;
  onSuggestionClick: (text: string) => void;
}) {
  if (message.role === "user") {
    return <UserMessage text={message.blocks[0].content} />;
  }

  return (
    <div className="space-y-6">
      {message.blocks.map((block, index) => (
        <ChatBlockRenderer
          key={index}
          block={block}
          onSuggestionClick={onSuggestionClick}
        />
      ))}
    </div>
  );
}

function ChatBlockRenderer({
  block,
  onSuggestionClick,
}: {
  block: ChatBlock;
  onSuggestionClick: (text: string) => void;
}) {
  switch (block.type) {
    case "text":
      return <AIMessage text={block.content} />;

    case "place_card":
      return (
        <PlaceCard
          title={block.title}
          location={block.location}
          image={block.image}
          rating={block.rating}
          price={block.price}
          tags={block.tags}
        />
      );

    case "suggestions":
      return (
        <div className="flex flex-wrap gap-2">
          {block.options.map((option) => (
            <button
              key={option}
              onClick={() => onSuggestionClick(option)}
              className="px-4 py-2 rounded-full text-xs font-medium bg-card border border-border hover:bg-muted text-muted-foreground"
            >
              {option}
            </button>
          ))}
        </div>
      );

    default:
      return null;
  }
}
