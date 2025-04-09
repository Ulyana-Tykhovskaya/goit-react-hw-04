import axios from "axios";

const ACCESS_KEY = "DUzP1R9et76guLf7mdGqb9d4SDDs7apvOPC38J2blGk";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
