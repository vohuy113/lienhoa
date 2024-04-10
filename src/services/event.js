export const getEvent = async () => {
  try {
    const response = await fetch(
      "http://104.43.106.2/wp-json/wp/v2/posts?_embed&categories=5&per_page=4"
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
export const getEventPerPage = async () => {
  try {
    const response = await fetch(
      "http://104.43.106.2/wp-json/wp/v2/posts?_embed&categories=5&per_page=10"
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
