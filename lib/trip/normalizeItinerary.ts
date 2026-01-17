const FALLBACK_ACTIVITIES = [
  {
    name: "Local neighborhood walk",
    category: "neighborhood",
    time_of_day: "evening",
    duration_hours: 1,
    description:
      "Relaxed walk to explore local streets, cafes, and surroundings.",
    entry_type: "free",
    intensity: "relaxed",
  },
  {
    name: "Local cafe hopping",
    category: "restaurant",
    time_of_day: "afternoon",
    duration_hours: 1,
    description:
      "Visit a few popular local cafes and experience the city’s coffee culture.",
    entry_type: "paid",
    intensity: "relaxed",
  },
  {
    name: "Street food exploration",
    category: "food_market",
    time_of_day: "evening",
    duration_hours: 1,
    description:
      "Sample popular street food and local snacks from nearby vendors.",
    entry_type: "paid",
    intensity: "relaxed",
  },
  {
    name: "Local market visit",
    category: "shopping",
    time_of_day: "morning",
    duration_hours: 1.5,
    description:
      "Browse a local market to see daily life and shop for souvenirs.",
    entry_type: "free",
    intensity: "light_walk",
  },
];

export function normalizeItinerary(itinerary: any[]) {
  let fallbackIndex = 0;

  return itinerary.map((day) => {
    const activities = [...day.activities];

    while (activities.length < 2) {
      const fallback =
        FALLBACK_ACTIVITIES[fallbackIndex % FALLBACK_ACTIVITIES.length];

      activities.push(fallback);
      fallbackIndex++;
    }

    return {
      ...day,
      activities,
    };
  });
}
