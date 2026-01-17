import { AIPlannerInput } from "@/lib/ai/AIProvider";

export function normalizePlannerInput(
  input: AIPlannerInput
): AIPlannerInput {
  return {
    ...input,
    destination: input.destination.trim(),
    interests: input.interests.map((i) =>
      i.trim().toLowerCase()
    ),
    mustVisit: input.mustVisit?.map((m) =>
      m.trim()
    ),
  };
}
