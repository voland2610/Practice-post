import styles from "../styles/UsersCard/UserCard.module.css";
const User = (props) => {
  const { user } = props;

  return (
    <div className={styles.users_container}>
        <div className={styles.user_card}>
          <h3 className={styles.user_name}>{user.name}</h3>

          <p className={styles.user_info}>
            <span>Email:</span> {user.email}
          </p>

          <p className={styles.user_info}>
            <span>Телефон:</span> {user.phone}
          </p>

          <p className={styles.user_info}>
            <span>Компания:</span> {user.company?.name}
          </p>
        </div>
    </div>
  );
};

export default User;
