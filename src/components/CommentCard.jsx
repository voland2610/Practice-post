import { useState, useEffect } from "react";
import styles from "../styles/UsersCard/UserCard.module.css";
import Comment from "./Comment";
import useFetch from "../hooks/useFetch";

const CommentCard = () => {
  const [url, setUrl] = useState(null);

  const { data: comments, isLoading, error } = useFetch(url);

  useEffect(() => {
    setUrl("https://jsonplaceholder.typicode.com/comments");
  }, []);

  if (!url) return null;

  return (
    <div>
      {isLoading && <div className={styles.loading}>Загрузка...</div>}

      {error && <div>Ошибка: {error}</div>}

      {!isLoading &&
        !error &&
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentCard;