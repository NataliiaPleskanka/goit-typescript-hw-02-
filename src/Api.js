import axios from "axios";

export default async function getPhotos(value, page = 1) {
  const URL = "https://api.unsplash.com/search/photos";
  const params = {
    client_id: "FAI36XVEz-8UQIKzygO5eEXvTTH7feuP-GzMaCSBIjw",
    query: value,
    per_page: 20,
    page,
  };

  return await axios.get(URL, { params });
}
