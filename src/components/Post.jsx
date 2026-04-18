import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import { getCommentsByPostId } from "../api/comments";
import styles from "../styles/Comments/Comment.module.css";

const Post = ({ post }) => {
  const [isActive, setIsActive] = useState(false);

  const fetchComments = useMemo(() => {
    if (!isActive) return null;
    return () => getCommentsByPostId(post.id);
  }, [isActive, post.id]);

  const { data: comments, isLoading, error } = useFetch(fetchComments);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <button onClick={() => setIsActive(!isActive)}>
        Комментарии
      </button>

      {isActive && (
        <div className={styles.comments_container}>
          {isLoading && <p>Загрузка...</p>}
          {error && <p>Ошибка: {error}</p>}

          {comments?.map((c) => (
            <div key={c.id} className={styles.comment_card}>
              <h4 className={styles.comment_title}>{c.name}</h4>

              <p className={styles.comment_body}>{c.body}</p>

              <p className={styles.comment_email}>
                <span>Email:</span> {c.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;