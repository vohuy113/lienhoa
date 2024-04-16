import { API_URL } from "./api";
export const getNewsPerPage = async () => {
  try {
    const response = await fetch(
      `${API_URL}/wp-json/wp/v2/posts?_embed&categories=3&per_page=10`
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Feiled to fetch Event");
    }
  } catch (err) {
    console.log(err);
  }
};
