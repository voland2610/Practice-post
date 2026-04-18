const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUsers = () => {
  return fetch(`${BASE_URL}/users`)
    .then((res) => {
      console.log(res)
      if (!res.ok) throw new Error("Ошибка загрузки пользователей");
      return res.json();
    });
};

export default getUsers;