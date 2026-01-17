import { ImageProvider } from "./ImageProvider";

const UNSPLASH_BASE_URL = "https://api.unsplash.com/search/photos";

export class UnsplashProvider implements ImageProvider {
  private accessKey = process.env.UNSPLASH_ACCESS_KEY!;

  async getImages(query: string, count = 4): Promise<string[]> {
    const searchQueries = this.buildSearchQueries(query);

    for (const q of searchQueries) {
      const images = await this.fetchImages(q, count);
      if (images.length > 0) {
        return images;
      }
    }

    return [];
  }

  /**
   * Builds a prioritized list of queries
   */
  private buildSearchQueries(rawQuery: string): string[] {
    const q = rawQuery.toLowerCase();

    // Landmark-specific boost
    if (
      q.includes("tower") ||
      q.includes("temple") ||
      q.includes("palace") ||
      q.includes("fort") ||
      q.includes("mosque") ||
      q.includes("church")
    ) {
      return [
        `${rawQuery} landmark`,
        `${rawQuery} famous landmark`,
        rawQuery,
      ];
    }

    return [
      `${rawQuery} famous landmark`,
      `${rawQuery} landmark`,
      `${rawQuery} skyline`,
      `${rawQuery} travel`,
    ];
  }

  private async fetchImages(
    query: string,
    count: number
  ): Promise<string[]> {
    try {
      const res = await fetch(
        `${UNSPLASH_BASE_URL}?query=${encodeURIComponent(
          query
        )}&per_page=${count}&orientation=landscape`,
        {
          headers: {
            Authorization: `Client-ID ${this.accessKey}`,
          },
        }
      );

      if (!res.ok) return [];

      const data = await res.json();

      return (
        data.results?.map((img: any) => img.urls.regular) || []
      );
    } catch {
      return [];
    }
  }
}
