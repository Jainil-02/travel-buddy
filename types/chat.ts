// types/chat.ts

export type ChatRole = "user" | "ai";

export type ChatBlock = TextBlock | PlaceCardBlock | SuggestionBlock;

export interface TextBlock {
  type: "text";
  content: string;
}

export interface PlaceCardBlock {
  type: "place_card";
  id: string;
  title: string;
  location: string;
  image: string;
  rating?: number;
  price?: string;
  tags?: string[];
}

export interface SuggestionBlock {
  type: "suggestions";
  options: string[];
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  blocks: ChatBlock[];
  createdAt: number;
}
