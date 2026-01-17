import { ImageProvider } from "./ImageProvider";

export async function getHeroImage(
  destination: string,
  imageProvider: ImageProvider
): Promise<string | null> {
  const heroQueries = [
    `${destination} skyline famous landmark`,
    `${destination} cityscape`,
    `${destination} travel`,
    `${destination}`,
  ];

  for (const query of heroQueries) {
    const images = await imageProvider.getImages(query, 1);
    if (images.length > 0) {
      return images[0];
    }
  }

  return null;
}
