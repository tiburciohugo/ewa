
export default async function fetchMovies() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL;
    const response = await fetch(`${baseURL}/api/movies`);

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    }

    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error("Fetching movies failed", error);
    return [];
  }
}
