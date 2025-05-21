import axios from "axios";

const ACCESS_KEY = "DUzP1R9et76guLf7mdGqb9d4SDDs7apvOPC38J2blGk";

axios.defaults.baseURL = "https://api.unsplash.com/";

type UnsplashImage = {
  id: string;
  alt_description: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
};

type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
};

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
