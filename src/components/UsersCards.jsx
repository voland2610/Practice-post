import { useEffect, useState } from "react";
import styles from "../styles/UsersCard/UserCard.module.css";
import User from "./User";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [isLouding, setIsLouding] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json)
        setIsLouding(false)
      })  
    }, 1000)
  }, []);
  // Сделать проверку на то загрузились ли пользователи
  return (
    <>
      {isLouding ? <div className={styles.Louding}>"Загрузка..."</div> : users.map(user => <User key={user.id} user={user} />) }
    </>
  );
};

export default UserCard;
