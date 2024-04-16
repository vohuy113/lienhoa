import { API_URL } from "./api";
export const getImageGallary = async () => {
  try {
    const response = await fetch(
      `${API_URL}/wp-json/wp/v2/posts?_embed&categories=4&per_page=9`
    );
    if (response.ok) {
      const data = await response.json();
      const imageUrls = data
        .map((item) => {
          return item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        })
        .filter((url) => url);
      return imageUrls;
    } else {
      throw new Error("Feiled to fetch Event");
    }
  } catch (err) {
    console.log(err);
  }
};
