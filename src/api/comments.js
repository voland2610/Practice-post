const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getComments = () => {
  return fetch(`${BASE_URL}/comments`)
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка загрузки комментариев");
      return res.json();
    });
};

export const getCommentsByPostId = (postId) => {
  return fetch(`${BASE_URL}/comments?postId=${postId}`)
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка загрузки комментариев");
      return res.json();
    });
};