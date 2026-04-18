const BASE_URL = "https://jsonplaceholder.typicode.com";

const getPosts = () => {
  return fetch(`${BASE_URL}/posts`)
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка загрузки постов");
      return res.json();
    });
};

export default getPosts;