// lib/images/ImageProvider.ts

export interface ImageProvider {
  /**
   * Returns a list of image URLs for a given search query
   */
  getImages(
    query: string,
    limit?: number
  ): Promise<string[]>
}
