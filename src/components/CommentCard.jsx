import { useEffect, useState } from "react";
import styles from "../styles/UsersCard/UserCard.module.css";
import Comment from "./Commet";

const CommentCard = () => {
  const [comments, setComments] = useState([]);
  const [isLouding, setIsLouding] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((json) => {
          setComments(json);
          setIsLouding(false);
        });
    }, 1000);
  }, []);
  
  return (
    <>
      {isLouding ? (
        <div className={styles.Louding}>"Загрузка..."</div>
      ) : (
        comments.map((comment) => <Comment key={comment.id} comment={comment} />)
      )}
    </>
  );
};

export default CommentCard;
