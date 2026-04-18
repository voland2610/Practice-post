import styles from "../styles/UsersCard/UserCard.module.css";
import User from "./User";
import useFetch from "../hooks/useFetch";
import getUsers from "../api/users";

const UserCard = () => {
  const { data: users, isLoading, error } = useFetch(getUsers);

  return (
    <div>
      {isLoading && <div className={styles.loading}>Загрузка...</div>}

      {error && <div>Ошибка: {error}</div>}

      {!isLoading &&
        !error &&
        users?.map((user) => (
          <User key={user.id} user={user} />
        ))}
    </div>
  );
};

export default UserCard;