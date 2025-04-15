import axios from "axios";

const ACCESS_KEY = "DUzP1R9et76guLf7mdGqb9d4SDDs7apvOPC38J2blGk";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
