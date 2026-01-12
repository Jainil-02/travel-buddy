// lib/images/UnsplashProvider.ts
import { ImageProvider } from "./ImageProvider"

export class UnsplashProvider implements ImageProvider {
  private accessKey: string

  constructor() {
    if (!process.env.UNSPLASH_ACCESS_KEY) {
      throw new Error("UNSPLASH_ACCESS_KEY is missing")
    }
    this.accessKey = process.env.UNSPLASH_ACCESS_KEY
  }

  async getImages(
    query: string,
    limit: number = 4
  ): Promise<string[]> {
    const url = new URL(
      "https://api.unsplash.com/search/photos"
    )

    url.searchParams.set("query", query)
    url.searchParams.set("per_page", limit.toString())
    url.searchParams.set("orientation", "landscape")

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`,
      },
    })

    if (!response.ok) {
      console.error(
        "Unsplash API error:",
        response.status
      )
      return []
    }

    const data = await response.json()

    return (
      data?.results?.map(
        (img: any) => img.urls.regular
      ) || []
    )
  }
}
