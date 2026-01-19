import { ChatMessage } from "@/types/chat"

export const mockMessages: ChatMessage[] = [
  {
    id: "u1",
    role: "user",
    createdAt: Date.now(),
    blocks: [
      {
        type: "text",
        content: "Plan a weekend trip in Udaipur under ₹10,000.",
      },
    ],
  },

  {
    id: "a1",
    role: "ai",
    createdAt: Date.now(),
    blocks: [
      {
        type: "text",
        content:
          "That sounds lovely! 🇮🇳 Udaipur is beautiful this time of year. Based on your ₹10,000 budget, here are some great options.",
      },

      {
        type: "place_card",
        id: "p1",
        title: "Lake Pichola View",
        location: "Udaipur, Rajasthan",
        image: "/images/LakePichola.png",
        rating: 4.8,
        price: "Free Entry",
        tags: ["Scenic", "Budget Friendly"],
      },

      {
        type: "place_card",
        id: "p2",
        title: "City Palace Tour",
        location: "Old City, Udaipur",
        image: "/images/CityPalace.png",
        rating: 4.6,
        price: "₹300 / person",
        tags: ["History", "Culture"],
      },

      {
        type: "place_card",
        id: "p3",
        title: "Zostel Udaipur",
        location: "Hostel / Hotel",
        image: "/images/Zostel.png",
        rating: 4.5,
        price: "₹1,200 / night",
        tags: ["Stay", "Social"],
      },

      {
        type: "suggestions",
        options: [
          "Create a 2-day itinerary",
          "Suggest budget stays",
          "Romantic places in Udaipur",
        ],
      },
    ],
  },
]
